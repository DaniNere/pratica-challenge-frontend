import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import TextInputWhit from "../TextInputWith/TextInputWith"; 
import { PasswordInputContainer, TogglePasswordButton } from "./PassordInputWhit.styles";



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