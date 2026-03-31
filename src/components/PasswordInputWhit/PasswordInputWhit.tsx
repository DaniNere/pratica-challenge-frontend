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
  isLast?: boolean; 
}

export default function PasswordInputWhit({
  id,
  label,
  placeholder,
  value,
  onChange,
  disabled = false,
  required = false,
  isLast = false,
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