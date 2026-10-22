import apiClient from "./client";
import {authServices} from "@/lib/api/services/authService"
import type { ApiError } from "@/types";
import axios from "axios";



// These act like middleware in express you can hook logic in the middle of before request is sent 
// to backend or response is recieved from backend

// This is for race conditions basically its either null or stores the result of refreshAccesToken()
// we want to call that once only if multiple requests try to call it so what we do is basically share this between all requests
// So all of them wait for this exact reference
// Since only one is being used all of them call to the same refreshToken service and it executes only once 
let sharedRefreshPromise: Promise<void> | null = null;


apiClient.interceptors.request.use(
    // Adding a auth token to the request when sending request to protected routes
    // We dont need this for request intercepts cause we arent using httpOnly cookies
    (config) => {
    return config;
    }

);

apiClient.interceptors.response.use(
    (response) => {
        return response;
    }

    ,
    // TODO: Normalize some of the errors coming back from the responses
    // TODO: We can add helper error interceptors here for now store them normally
    async (error: unknown)=>{
        // For now there can be three types of erros here one non AxiosErrors from above response interceptors
        // AxiosErrors with response.data Like our ApiError from request erros  and network erros where response isnt filled 
        // This interceptor is for refresh Token call if acceess token expires
        if (axios.isAxiosError<ApiError>(error)){
            if(error.response?.status === 401 && error.response?.data.code === "ACCESS_TOKEN_EXPIRED" ){
                const originalRequest = error.config;
                if (!originalRequest) return Promise.reject(error);

                if(originalRequest.retry){
                    return Promise.reject(error);
                }
                
                originalRequest.retry = true;

                if(!sharedRefreshPromise){
                    sharedRefreshPromise = authServices.refreshAuthTokenService().then(() => {}).finally(() => {
                        sharedRefreshPromise = null;
                    });
                }
                
                // TODO: Clear authentication state and require login 
                // Removing access tokens from whereve i store it 
                // Updating my authentication context redirect user to login prevent
                await sharedRefreshPromise;
                // Send the retry request using apiClient because the interceptors and the base credentials are both configured to the apiClient
                return apiClient(originalRequest)
                
            }
        }


        
        return Promise.reject(error)
    }
)
