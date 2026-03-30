import React from 'react';
import * as S from './ConfirmationModal.styles';

interface ConfirmationModalProps {
  isOpen: boolean;
  title: string;           
  message: string;         
  subMessage?: string;     
  confirmLabel?: string;   
  cancelLabel?: string;    
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  title,
  message,
  subMessage,
  confirmLabel = "SIM",
  cancelLabel = "NÃO",
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <S.Overlay>
      <S.Container>
        <S.Header>
          <span>{title}</span>
        </S.Header>

        <S.Content>
          <S.MessageWrapper>
            <S.Message>{message}</S.Message>
            {subMessage && <S.SubMessage>{subMessage}</S.SubMessage>}
          </S.MessageWrapper>

          <S.ButtonGroup>
            <S.ConfirmButton onClick={onConfirm}>
              {confirmLabel}
            </S.ConfirmButton>
            <S.CancelButton onClick={onCancel}>
              {cancelLabel}
            </S.CancelButton>
          </S.ButtonGroup>
        </S.Content>
      </S.Container>
    </S.Overlay>
  );
};