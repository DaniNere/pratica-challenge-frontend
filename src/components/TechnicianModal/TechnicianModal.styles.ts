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
  z-index: 10000;
`;

export const ModalContainer = styled.div`
  width: 600px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  background: linear-gradient(90deg, #4A90E2 0%, #355C7D 100%);
  color: white;
  padding: 15px;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 30px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  label {
    font-family: "Roboto", sans-serif;
    font-size: 13px;
    font-weight: 600;
    color: #333;
  }

  input {
    background: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    outline: none;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.18px;
    color: #333333;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  padding-bottom: 30px;
`;
export const SaveButton = styled.button`
  width: 108px;
  height: 38px;
  background-color: #396BC9;
  color: #FFFFFF;
  border: none;
  border-radius: 6px;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const CancelButton = styled.button`
  width: 108px;
  height: 38px;
  background-color: #FFFFFF;
  color: #D9534F;
  border: 1px solid #D9534F;
  border-radius: 6px;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: #FFF5F5;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;