import styled from "styled-components";

/**
 * Login Styles
 *
 * Layout: Split screen design
 * - Left: institutional blue form panel (#004687), 660px de largura, sombra
 * - Right: facade image panel, 746px de largura, borda cinza
 *
 * Responsiveness:
 * - Desktop (~≥1366px): 660px + 746px (layout idêntico ao protótipo)
 * - Entre 900px e 1366px: painéis se adaptam (flex)
 * - Mobile (<900px): mostra só o painel azul (form); esconde fachada
 */

export const LoginContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-family: "Roboto", sans-serif;
  position: relative;
`;


export const LeftPanel = styled.div`
  width: 660px;
  height: 100vh;
  background: #004687;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  position: relative;
  z-index: 2;
  overflow: hidden;

  @media (max-width: 900px) {
    width: 100%;
    border-radius: 0;
  }
`;

export const RightPanel = styled.div`
  width: 746px; 
  height: 100vh;
  position: relative;
  z-index: 1;
  margin-left: -40px; 

  background: transparent;
  border-left: 1px solid #707070;
  overflow: hidden;

  @media (max-width: 1366px) {
    flex-grow: 1;
    width: auto;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;
export const LogoWrapper = styled.div`
  width: 100px; 
  height: 114px; 
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto; 
  margin-bottom: 73px;

  img {
    width: 100px;
    height: 114px;
    object-fit: contain;
  }

  @media (max-width: 900px) {
    position: relative;
    top: auto;
    left: auto;
    margin-bottom: 32px;
    width: 64px;
    height: 64px;

    img {
      width: 64px;
      height: 64px;
    }
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 580px;
  display: flex;
  flex-direction: column; 
  padding: 0 40px;
  padding-top: 100px; 
  padding-bottom: 40px;


  form {
    display: flex;
    flex-direction: column;
    //gap: 21px;
  }

  @media (max-width: 900px) {
    max-width: 100%;
    padding: 24px;
    padding-top: 32px; 
    padding-bottom: 32px;
  }
`;

export const ErrorMessage = styled.div`
  padding: 12px 16px;
  margin-bottom: 16px;
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  color: #ffffff;
  background-color: rgba(220, 53, 69, 0.9);
  border-radius: 4px;
  border-left: 4px solid #dc3545;
  animation: slideIn 0.3s ease;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 900px) {
    padding: 10px 14px;
    font-size: 12px;
  }
`;