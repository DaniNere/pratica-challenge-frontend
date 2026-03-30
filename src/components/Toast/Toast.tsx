import React, { useEffect } from 'react';
import * as S from './Toast.styles';

interface ToastProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({ 
  isOpen, 
  message, 
  onClose, 
  duration = 3000 
}) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose, duration]);

  if (!isOpen) return null;

  return (
    <S.Overlay onClick={onClose}>
      <S.ToastContainer onClick={(e) => e.stopPropagation()}>
        <S.Message>{message}</S.Message>
      </S.ToastContainer>
    </S.Overlay>
  );
};