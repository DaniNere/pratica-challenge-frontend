import styled from "styled-components";

export const PasswordInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column; 
  margin-bottom: 24px; 

  &:last-of-type {
    margin-bottom: 32px; 
  }

  @media (max-width: 900px) {
    margin-bottom: 20px;

    &:last-of-type {
      margin-bottom: 24px;
    }
  }
`;

export const TogglePasswordButton = styled.button`
  position: absolute;
  right: 12px;
  top: calc(18px + 8px + (45px / 2)); 
  transform: translateY(-50%); 
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #C9C9C9;
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
    top: calc(18px + 8px + (40px / 2));
    svg {
      width: 18px;
      height: 18px;
    }
  }
`;