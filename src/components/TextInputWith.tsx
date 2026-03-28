import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px; /* Espaçamento entre o label e o input */
  margin-bottom: 24px; /* ✅ Reintroduz o espaçamento padrão entre campos */

  &:last-of-type {
    margin-bottom: 32px; /* ✅ Espaçamento após o último input antes do botão */
  }

  @media (max-width: 900px) {
    margin-bottom: 20px;

    &:last-of-type {
      margin-bottom: 24px;
    }
  }
`;

const Label = styled.label`
  font-family: "Roboto", sans-serif;
  font-size: 13px; /* ✅ Ajustado para 13px */
  font-weight: 500; /* ✅ Ajustado para Medium (500) */
  line-height: 15px; /* ✅ Adicionado line-height */
  color: #f8f9fa; /* ✅ Ajustado para #F8F9FA */
  text-transform: none; /* ✅ Removido capitalize, pois o protótipo não usa */
  letter-spacing: 0px; /* ✅ Ajustado para 0px */
  opacity: 1; /* ✅ Opacidade */
  text-align: left; /* ✅ Alinhamento do texto */
  width: 100%; /* ✅ Garante que o label ocupe a largura total disponível */
  height: 18px; /* ✅ Altura do label */
`;

// ... (InputField e o restante do componente)

const InputField = styled.input`
  width: 580px;
  height: 45px;
  background: #f8f9fa 0% 0% no-repeat padding-box;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: #003c7a;
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

  /* Autofill (Chrome) */
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

interface TextInputWhitProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  // ✅ REMOVIDO: isLast, pois o espaçamento será controlado pelo componente pai
}

/**
 * Reusable TextInputWhit (institutional input field)
 * Matches the Prática visual pattern (580×45px, #F8F9FA background, rounded corners)
 * The vertical spacing between this component and others is managed by its parent.
 */
export default function TextInputWhit({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  disabled = false,
  required = false,
}: TextInputWhitProps) {
  return (
    <InputContainer>
      <Label htmlFor={id}>{label}</Label>
      <InputField
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
      />
    </InputContainer>
  );
}