import React, {
  createContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/authService";
import api from "../api/api";
import type { LoginCredentials } from "../types/auth";

interface AuthContextData {
  signed: boolean;
  loading: boolean;
  signIn(credentials: LoginCredentials): Promise<void>;
  signOut(): void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storagedToken = localStorage.getItem("authToken");

    if (storagedToken) {
      setToken(storagedToken);
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
    setLoading(false);
  }, []);

  async function signIn(credentials: LoginCredentials) {
    try {
      const response = await authService.login(credentials);
      const { token: tokenReceive } = response;

      setToken(tokenReceive);
      localStorage.setItem("authToken", tokenReceive);

      api.defaults.headers.Authorization = `Bearer ${tokenReceive}`;

    } catch (error) {
      alert("Falha no login. Verifique suas credenciais e tente novamente.");
      throw error;
    }
  }

  function signOut() {
    localStorage.removeItem("authToken");
    setToken(null);

    delete api.defaults.headers.Authorization;
    navigate("/");
  }

  return (
    <AuthContext.Provider value={{ signed: !!token, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
