import { useState } from "react";
import styled from "styled-components";
import { Eye, EyeOff } from "lucide-react";
import TextInputWhit from "../components/TextInputWith"; // Reutiliza o TextInputWhit

const PasswordInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column; /* Para alinhar label e input verticalmente */
  margin-bottom: 24px; /* Espaçamento padrão entre campos */

  &:last-of-type {
    margin-bottom: 32px; /* Espaçamento após o último input antes do botão */
  }

  @media (max-width: 900px) {
    margin-bottom: 20px;

    &:last-of-type {
      margin-bottom: 24px;
    }
  }
`;

const TogglePasswordButton = styled.button`
  position: absolute;
  right: 12px;
  /* ✅ NOVO CÁLCULO: Alinha o ícone com o centro do InputField */
  /* O InputField tem 45px de altura. O label tem 18px (altura da linha 15px + padding/margin). O gap é 8px. */
  /* A parte superior do InputField começa em (altura do label + gap) = (18px + 8px) = 26px do topo do PasswordInputContainer. */
  /* O centro do InputField é (26px + (45px / 2)) = 26px + 22.5px = 48.5px do topo do PasswordInputContainer. */
  top: calc(18px + 8px + (45px / 2)); /* Altura do label + gap + metade da altura do input */
  transform: translateY(-50%); /* Centraliza o próprio botão verticalmente */
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666666;
  transition: color 0.2s ease;

  &:hover:not(:disabled) {
    color: #003c7a;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 900px) {
    /* Ajusta para altura do input mobile (40px) */
    top: calc(18px + 8px + (40px / 2));
    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

interface PasswordInputWhitProps {
  id: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  isLast?: boolean; // Adiciona isLast para controlar a margem final
}

/**
 * PasswordInputWhit Component
 * Reusable password input field with a toggle visibility icon.
 * Encapsulates TextInputWhit and the show/hide password functionality.
 */
export default function PasswordInputWhit({
  id,
  label,
  placeholder,
  value,
  onChange,
  disabled = false,
  required = false,
  isLast = false, // Nova prop para controlar a margem final
}: PasswordInputWhitProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <PasswordInputContainer style={isLast ? { marginBottom: "32px" } : {}}>
      <TextInputWhit
        id={id}
        label={label}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
      />
      <TogglePasswordButton
        type="button"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          setShowPassword(!showPassword);
        }}
        disabled={disabled}
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </TogglePasswordButton>
    </PasswordInputContainer>
  );
}