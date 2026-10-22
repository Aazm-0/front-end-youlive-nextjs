export interface LogInCredentials {
  userName: string;
  password: string;
}

export interface RegisterCrentials {
  userName: string;
  email: string;
  dateOfBirth: string;
  password: string;
}

export interface VerificationCodeCredentials {
  enteredVerifyCode: string;
  userName: string;
}