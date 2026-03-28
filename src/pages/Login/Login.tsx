import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import {
  LoginContainer,
  LeftPanel,
  RightPanel,
  LogoWrapper,
  FormWrapper,
  ErrorMessage,
} from "./Login.styles";

import { AppButton as Button } from "../../components/Button";
import TextInputWhit from "../../components/TextInputWith";
import PasswordInputWhit from "../../components/PasswordInputWhit";
import PraticaBuildingBackground from "../../components/PraticaBuildingBackground"; // ✨ RESTAURADO: Importamos o componente
import MPS from "../../assets/MPS.svg";


/**
 * Login Component
 *
 * Implements the admin authentication flow for the Prática partners portal.
 * Layout:
 * - Left panel (blue): login form
 * - Right panel: company building background image
 *
 * Responsive:
 * - Desktop: split view (50/50)
 * - Mobile: stacked layout (form above image)
 */
export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Clear error message when user starts typing
  useEffect(() => {
    if (error) setError("");
  }, [email, password]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        { email, password }
      );

      if (response.data.token) {
        localStorage.setItem("authToken", response.data.token);
        navigate("/technicians");
      }
    } catch (error) {
      const axiosError = error as AxiosError<{ message?: string }>;
      const errorMessage =
        axiosError.response?.data?.message ||
        "Invalid credentials. Please try again.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      {/* Left Panel - Form */}
      <LeftPanel>
        <FormWrapper>
          <LogoWrapper>
            <img src={MPS} alt="Prática Logo" />
          </LogoWrapper>

          <form onSubmit={handleSubmit}>
            {/* Email Field usando TextInputWhit */}
            <TextInputWhit
              id="email"
              label="Login"
              type="email"
              placeholder="Informe seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />

            {/* Password Field usando PasswordInputWhit */}
            <PasswordInputWhit
              id="password"
              label="Senha"
              placeholder="Informe sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />

            {/* Error Message */}
            {error && <ErrorMessage>{error}</ErrorMessage>}

            {/* Submit Button */}
            <Button
              type="submit"
              label={loading ? "ENTRANDO..." : "ENTRAR"}
              disabled={loading}
            />
          </form>
        </FormWrapper>
      </LeftPanel>

      {/* Right Panel - Background Image usando PraticaBuildingBackground */}
      <RightPanel>
        <PraticaBuildingBackground />
      </RightPanel>
    </LoginContainer>
  );
}