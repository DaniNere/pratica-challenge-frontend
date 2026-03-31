import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px; 
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

export const Label = styled.label`
  font-family: "Roboto", sans-serif;
  font-size: 13px; 
  font-weight: 500; 
  line-height: 15px; 
  color: #f8f9fa; 
  text-transform: none; 
  letter-spacing: 0px; 
  opacity: 1;
  text-align: left; 
  width: 100%; 
  height: 18px;
`;

export const InputField = styled.input`
  width: 580px;
  height: 45px;
  background: #f8f9fa 0% 0% no-repeat padding-box;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  color: #333333;
  padding: 0 16px;
  box-sizing: border-box;
  opacity: 1;
  transition: all 0.3s ease;

  &::placeholder {
    color: #999999;
    font-weight: 400;
  }

  &:focus {
    outline: none;
    border-color: #0056b3;
    box-shadow: 0 0 0 3px rgba(0, 92, 179, 0.1);
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 1000px #f8f9fa inset !important;
    -webkit-text-fill-color: #003c7a !important;
  }

  @media (max-width: 900px) {
    width: 100%;
    height: 40px;
  }
`;