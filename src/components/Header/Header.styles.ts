import styled from 'styled-components';

export const HeaderContainer = styled.header`
  /* Layout Properties */
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 65px;

  /* UI Properties */
  background: #D0DFF0 0% 0% no-repeat padding-box;
  border-radius: 50px 0px 0px 50px;
  opacity: 1;

  /* Alinhamento */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 30px; 
  box-sizing: border-box;
`;

export const ExitButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px; /* Espaço entre o ícone e o texto conforme layout */
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: opacity 0.2s;

  /* Estilização do Ícone (off.png) */
  img {
    width: 10px;
    height: 10px;
    opacity: 1;
  }

  /* Estilização do Texto SAIR */
  span {
    text-align: left;
    font: normal normal normal 13px/20px Roboto;
    letter-spacing: 0.2px;
    color: #2F72CF;
    text-transform: uppercase;
    opacity: 1;
  }

  &:hover {
    opacity: 0.7;
  }

  &:active {
    transform: scale(0.95);
  }
`;