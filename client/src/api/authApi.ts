import axiosClient from "./axiosClient";

interface SignUpParams {
  username: string;
  password: string;
  confirmPassword: string;
}

interface LogInParams {
  username: string;
  password: string;
}

const authApi = {
  signup: (params: SignUpParams) => axiosClient.post("auth/signup", params),
  login: (params: LogInParams) => axiosClient.post("auth/login", params),
  verifyToken: () => axiosClient.post("auth/verify-token"),
};

export default authApi;
