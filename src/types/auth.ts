export interface LoginCredentials {
  email: string;
  password?: string;
}

export interface LoginResponse {
  token: string;
}

export interface TokenPayload {
  sub: number;    
  role: string;   
  email: string;  
  iat: number;    
  exp: number;   
}

export interface User {
  id: number;
  email: string;
  role: string;
}