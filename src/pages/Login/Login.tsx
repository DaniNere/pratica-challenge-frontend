import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { AxiosError } from "axios";
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
import PraticaBuildingBackground from "../../components/PraticaBuildingBackground";
import MPS from "../../assets/MPS.svg";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) setError("");
  }, [email, password]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signIn({ email, password });
      setEmail("");
      setPassword("");

      navigate("/technicians");
    } catch (err) {
      const axiosError = err as AxiosError<{ message?: string }>;
      const errorMessage =
        axiosError.response?.data?.message ||
        "Credenciais inválidas. Tente novamente.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      <LeftPanel>
        <FormWrapper>
          <LogoWrapper>
            <img src={MPS} alt="Prática Logo" />
          </LogoWrapper>

          <form onSubmit={handleSubmit}>
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

            <PasswordInputWhit
              id="password"
              label="Senha"
              placeholder="Informe sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <Button
              type="submit"
              label={loading ? "ENTRANDO..." : "ENTRAR"}
              disabled={loading}
            />
          </form>
        </FormWrapper>
      </LeftPanel>
      <RightPanel>
        <PraticaBuildingBackground />
      </RightPanel>
    </LoginContainer>
  );
}
