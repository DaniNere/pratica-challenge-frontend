import styled from "styled-components";
import { AppButton } from "../../components/Button/Button";

interface SidebarProps {
  $minimized?: boolean;
}

export const AddButton = styled(AppButton)`
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
  filter: ${(props) => (props.$isBlur ? "blur(5px)" : "none")};
  transition: filter 0.3s ease;
`;

export const LogoWrapper = styled.div<{ $minimized?: boolean }>`
  display: flex;
  visibility: ${props => props.$minimized ? 'hidden' : 'visible'};
  height: 114px; 

  width: 100px;
  opacity: ${props => props.$minimized ? 0 : 1};
  justify-content: center;
  align-items: center;
  margin: 40px auto 73px auto;
  transition: opacity 0.3s ease;

  img {
    width: 100px;
    height: 114px;
    object-fit: contain;
  }

  @media (max-width: 900px) {
    display: ${props => props.$minimized ? 'none' : 'flex'};
  }
`;



export const Sidebar = styled.aside<SidebarProps>`
  width: ${props => props.$minimized ? '100px' : '250px'};
  height: 100vh;
  background: #004687;
  border-radius: 0px 35px 35px 0px;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: width 0.3s ease-in-out;
  z-index: 10;
  overflow: hidden; 
`;

export const ToggleButton = styled.button<SidebarProps>`
  position: absolute;
  right: 5px; 
  top: 361px;
  width: 25px;
  height: 25px;
  opacity: 0;
  background: transparent;
  border: none;
  outline: none;
  padding: 0;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 999; 
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;

  ${Sidebar}:hover & {
    opacity: 1;
  }

  &:focus, 
  &:active, 
  &:focus-visible {
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }

  svg {
    fill: #F8F9FA; 
    color: #F8F9FA;
    width: 24px;
    height: 24px;

    transform: ${props => props.$minimized 
      ? 'matrix(0, -1, 1, 0, 0, 0)' 
      : 'rotate(1deg)'};

    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const MenuItem = styled.div<{ $active?: boolean; $minimized?: boolean }>`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center; 
  justify-content: ${props => props.$minimized ? 'center' : 'flex-start'};
  padding-left: ${props => props.$minimized ? '0' : '30px'};

  background: ${props => props.$active ? "#025CB7" : "transparent"};
  color: white;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  span {
    display: ${props => props.$minimized ? 'none' : 'block'};
    white-space: nowrap;
    margin-left: 15px;
  }

  img { 
    width: 24px; 
    height: 24px;
    flex-shrink: 0;
    margin: ${props => props.$minimized ? '0 auto' : '0'};
  }
`;

export const MainArea = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  width: 100%;
  overflow-x: hidden;
`;

export const ContentPadding = styled.div`
  margin-top: 45px;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  box-sizing: border-box;
`;

export const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px; 
  width: 100%; 
  padding: 0 40px;
  box-sizing: border-box;
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

    font-family: "Roboto", sans-serif;
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
      border: 1px solid #396bc9;
      &::-webkit-input-placeholder {
        font-style: italic !important;
        color: #a6a6a6;
      }
      &::-moz-placeholder {
        font-style: italic !important;
        color: #a6a6a6;
      }
      &:-ms-input-placeholder {
        font-style: italic !important;
        color: #a6a6a6;
      }
      &::placeholder {
        font-style: italic !important;
        color: #a6a6a6;
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
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  border-collapse: collapse;
  font-family: "Roboto", sans-serif;
  margin-top: 25px;
  table-layout: fixed;

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
        border-bottom: 2px solid #e5e5e5;
      }
    }
  }

  tbody {
    tr {
      height: 35px;
      opacity: 1;
      &:nth-child(odd) {
        background: #e5e5e5 0% 0% no-repeat padding-box;
      }

      &:nth-child(even) {
        background: #ffffff;
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
