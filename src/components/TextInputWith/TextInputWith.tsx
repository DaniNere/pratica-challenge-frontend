import React from "react";
import { InputContainer, Label, InputField } from "./TextInputWith.styles";

interface TextInputWhitProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean
}

/**
 * Reusable TextInputWhit (institutional input field)
 * Matches the Prática visual pattern (580×45px, #F8F9FA background, rounded corners)
 * The vertical spacing between this component and others is managed by its parent.
 */
export default function TextInputWhit({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  disabled = false,
  required = false,
}: TextInputWhitProps) {
  return (
    <InputContainer>
      <Label htmlFor={id}>{label}</Label>
      <InputField
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
      />
    </InputContainer>
  );
}