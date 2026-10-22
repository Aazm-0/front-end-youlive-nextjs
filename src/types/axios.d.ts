//  I am going to attach a retry boolean value defaulting to false for the axios request config to be used in the apiClient instance.
// This will be used to determine if the request should be retried or not in case of a
// network error or a 5xx response from the server. The retry logic will be implemented in
// the apiClient instance using an interceptor.

import axios from "axios";

declare module "axios" {
  export interface AxiosRequestConfig {
    retry?: boolean;
  }
}

declare module "axios" {
  export interface InternalAxiosRequestConfig {
    retry?: boolean;
  }
}