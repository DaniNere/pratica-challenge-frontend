import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11000;
`;

export const Container = styled.div`
  width: 350px;
  height: 190px;
  background: #F8F9FA;
  box-shadow: 0px 0px 6px #3333334D;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Header = styled.div`
  width: 100%;
  height: 50px;
  background: transparent linear-gradient(97deg, #4F8FE9 0%, #396BC9 45%, #5E50AE 100%) 0% 0% no-repeat padding-box;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px 20px;
`;

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const Message = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #333333;
  text-align: center;
  margin: 0;
`;

export const SubMessage = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #333333;
  text-align: center;
  margin: 0;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const ConfirmButton = styled.button`
  width: 68px;
  height: 38px;
  background: #396BC9;
  color: #FFFFFF;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 13px;
  text-transform: uppercase;
  &:hover { opacity: 0.9; }
`;

export const CancelButton = styled.button`
  width: 68px;
  height: 38px;
  background: #FFFFFF;
  border: 1px solid #C21618;
  border-radius: 6px;
  cursor: pointer;
  color: #C21618;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 13px;
  text-transform: uppercase;

  &:hover { background: #fff5f5; }
`;