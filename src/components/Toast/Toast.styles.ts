import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: transparent; /* Fundo invisível para capturar o clique fora */
  display: flex;
  justify-content: center;
  z-index: 20000; /* Acima de tudo */
`;

export const ToastContainer = styled.div`
  /* Layout Properties */
  position: absolute;
  top: -2px;
  width: 326px;
  height: 61px;

  /* UI Properties */
  background: #048243; /* Verde do design */
  border-radius: 0px 0px 6px 6px;
  box-shadow: 0px 3px 6px #00000029;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  opacity: 1;

  /* Transição de entrada */
  animation: slideDown 0.4s ease-out;

  @keyframes slideDown {
    from { transform: translateY(-100%); }
    to { transform: translateY(0); }
  }
`;

export const Message = styled.span`
  /* UI Properties do Texto */
  width: 286px;
  color: #F8F9FA;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 500; /* Medium */
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0.32px;
  text-transform: uppercase;
`;