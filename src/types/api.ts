export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  timeStamp: string;
  statusCode: number;
}

export type ApiErrorCode = "ACCESS_TOKEN_EXPIRED" | "INVALID_CREDENTIALS" | "UNAUTHORIZED";

export interface ApiError {
  success: false;
  message: string;
  errors?: string[];
  timeStamp?: string;
  code? : ApiErrorCode;
}
