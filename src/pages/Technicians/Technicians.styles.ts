import styled from "styled-components";
import { AppButton } from "../../components/Button/Button";

export const AddButton = styled(AppButton)`
  /* Medidas Exatas do Design */
  width: 180px;
  height: 35px;
  border-radius: 6px;
`;

export const ScreenContainer = styled.div<{ $isBlur?: boolean }>`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  overflow: hidden;
  margin: 0 auto;
  filter: ${props => props.$isBlur ? 'blur(5px)' : 'none'};
  transition: filter 0.3s ease;
`;

export const LogoWrapper = styled.div`
  width: 100px;
  height: 114px;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px auto 73px auto;

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

export const Sidebar = styled.aside`
  top: 0px;
  left: 0px;
  width: 250px;
  height: 768px;
  background: #004687 0% 0% no-repeat padding-box;
  border-radius: 0px 35px 35px 0px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  z-index: 10;
  overflow: hidden;
`;

export const MenuItem = styled.div<{ $active?: boolean }>`
  width: 250px;
  height: 70px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  box-sizing: border-box;
  background: ${(props) => (props.$active ? "#025CB7" : "transparent")};
  color: white;
  cursor: pointer;

  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  font-size: 14px;
  gap: 15px;
  transition: background 0.3s ease;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.1);

  &:hover {
    background: #025cb7;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

export const MainArea = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ContentPadding = styled.div`
  margin-top: 45px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchInput = styled.div`
  position: relative;
  width: 650px;
  height: 40px;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    height: 100%;
    padding-left: 45px;
    background: transparent; 
    border: 1px solid #004992;
    border-radius: 6px;
    outline: none;
    box-sizing: border-box;

    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 12px;
    color: #333333;
    letter-spacing: 0.18px;

    &::placeholder {
      color: #004992;
      opacity: 0.7;
      font-style: normal;
      transition: all 0.2s ease;
    }

    &:focus {
      border: 1px solid #396BC9;
      &::-webkit-input-placeholder { font-style: italic !important; color: #A6A6A6; }
      &::-moz-placeholder { font-style: italic !important; color: #A6A6A6; }
      &:-ms-input-placeholder { font-style: italic !important; color: #A6A6A6; }
      &::placeholder { 
        font-style: italic !important; 
        color: #A6A6A6;
        font-weight: 500;
      }
    }
  }

  .search-icon {
    position: absolute;
    left: 15px;
    color: #004992;
  }
`;

export const TechniciansTable = styled.table`
  width: 1116px; 
  border-collapse: collapse;
  font-family: 'Roboto', sans-serif;
  margin-top: 25px; 

  thead {
    tr {
      height: 35px; 
      text-align: left;

      th {
        padding: 0 20px;
        color: #333333;
        font-size: 13px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0.2px;
        text-transform: none; 
        opacity: 1;
        border-bottom: 2px solid #E5E5E5;
      }
    }
  }

  tbody {
    tr {
      height: 35px;
      opacity: 1;
      &:nth-child(even) {
        background: #E5E5E5 0% 0% no-repeat padding-box;
      }

      &:nth-child(odd) {
        background: #FFFFFF;
      }

      td {
        padding: 0 20px;
        color: #333333;
        font-size: 13px;
        vertical-align: middle;
      }
    }
  }
`;

export const IconButton = styled.button`
  box-sizing: border-box !important;
  width: 35px !important;
  height: 35px !important;

  background: transparent;
  border: none !important; 
  outline: none !important; 
  padding: 0 !important;
  margin: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.1s ease;

  img {
    width: 35px !important;
    height: 35px !important;
    display: block;
    pointer-events: none;
  }

  &:hover {
    transform: scale(1.1);
    background: rgba(0, 0, 0, 0.05); 
  }

  &:active {
    transform: scale(0.9);
  }

  &:focus {
    outline: none;
    border: none;
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;