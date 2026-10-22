import apiClient from "../client";
// Rememember keep it clean use type keyword
import type {
  LogInCredentials,
  RegisterCrentials,
  VerificationCodeCredentials,
  ApiResponse,
  User,
} from "@/types";

// Moved to the env
// const authUserUrl = "";

const logInService = async (credentials: LogInCredentials): Promise<User> => {
  const response = await apiClient.post<ApiResponse<User>>(
    `/login`,
    credentials,
  );

  const user = response.data.data;

  // So we dont even take 0 "" or false
  if (user === null || user === undefined)
    throw Error(
      "This response needs data values for user from the ApiResponse of the backend",
    );

  return user;
};

const registerService = async (
  credentials: RegisterCrentials,
): Promise<User> => {
  const response = await apiClient.post<ApiResponse<User>>(
    `/register`,
    credentials,
  );

  const user = response.data.data;

  // So we dont even take 0 "" or false
  if (user === null || user === undefined)
    throw Error(
      "This response needs data values for user from the ApiResponse of the backend",
    );

  return user;
};

const verifyCodeService = async (
  credentials: VerificationCodeCredentials,
): Promise<string> => {
  const response = await apiClient.post<ApiResponse<null>>(
    `/verify-code`,
    credentials,
  );

  return response.data.message;
};

const resendVerifyCodeService = async (userName: string): Promise<string> => {
  const response = await apiClient.post<ApiResponse<null>>(`/refresh-code`, {
    userName,
  });

  return response.data.message;
};

const logOutService = async (): Promise<string> => {
  const response = await apiClient.post<ApiResponse<null>>(`/log-out`);

  return response.data.message;
};

const refreshAuthTokenService = async (): Promise<string> => {
  const response = await apiClient.post<ApiResponse<null>>(`/refresh-token`);

  return response.data.message;
};

export const authServices = {
  logInService,
  registerService,
  verifyCodeService,
  resendVerifyCodeService,
  logOutService,
  refreshAuthTokenService,
};
