import React from "react";
import { Button } from "./Button.styles";


interface ButtonProps {
  label?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset"; 
  loading?: boolean;
  disabled?: boolean;
  variant?: "primary" | "secondary";
  background?: string; 
  color?: string;
}

export const AppButton: React.FC<ButtonProps> = ({
  label,
  children,
  onClick,
  type = "button",       
  background = "#f8f9fa", 
  color = "#003c7a",     
  variant = "primary",
  loading = false,
  disabled = false,
}) => {
  return (
    <Button
      type={type}       
      onClick={onClick}
      disabled={disabled || loading}
      $bg={background}
      $clr={color}
      $variant={variant}
    >
      {loading ? "AGUARDE..." : label || children}
    </Button>
  );
};