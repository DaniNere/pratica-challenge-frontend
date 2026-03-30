import React from "react";
import offIcon from "../../assets/off.svg"
import { HeaderContainer, ExitButton } from "./Header.styles";


interface HeaderProps {
  onLogout?: () => void;
}


export const Header: React.FC<HeaderProps> = ({ onLogout }) => {
  return (
    <HeaderContainer>
      <ExitButton onClick={onLogout}>
        <img src={offIcon} alt="Ícone Sair" />
        <span>SAIR</span>
      </ExitButton>
    </HeaderContainer>
  );
};