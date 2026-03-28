import styled from "styled-components";

const Button = styled.button<{ $variant?: "primary" | "secondary" }>`
  width: ${(props) => (props.$variant === "secondary" ? "120px" : "274px")};
  height: 35px;
  border: none;
  border-radius: 6px;
  background: #f8f9fa;
  color: #003c7a;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: center;

  &:hover:not(:disabled) {
    background: #e9ecef;
    box-shadow: 0 3px 8px rgba(0, 60, 122, 0.2);
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 2px 5px rgba(0, 60, 122, 0.15);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

interface ButtonProps {
  label?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  disabled?: boolean;
  variant?: "primary" | "secondary";
}

/**
 * Institutional AppButton Component
 * Follows Prática's color and geometry guidelines
 */
export const AppButton: React.FC<ButtonProps> = ({
  label,
  children,
  onClick,
  type = "button",
  loading = false,
  disabled = false,
  variant = "primary",
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      $variant={variant}
    >
      {loading ? "AGUARDE..." : label || children}
    </Button>
  );
};