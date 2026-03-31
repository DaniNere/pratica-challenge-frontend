import styled from "styled-components";


export const Button = styled.button<{ $bg?: string; $clr?: string; $variant?: string }>`
  background: ${props => props.$bg};
  color: ${props => props.$clr};

  width: ${(props) => (props.$variant === "secondary" ? "120px" : "274px")};
  height: 35px;
  border: none;
  border-radius: 6px;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 13px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;
  

  &:active:not(:disabled) {
    transform: scale(0.96);
  }

  &:hover:not(:disabled) {
    filter: brightness(0.95);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;