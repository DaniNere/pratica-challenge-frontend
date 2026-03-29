import api from "../api/api";
import type { LoginCredentials, LoginResponse } from "../types/auth";

export const authService = {
    
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>(
      "/api/auth/login",
      credentials,
    );
    return response.data;
  },
};
