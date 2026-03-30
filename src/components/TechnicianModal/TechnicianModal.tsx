import React, { useEffect, useState } from "react";
import * as S from "./TechnicianModal.styles";
import { AppButton } from "../../components/Button/Button";

interface Technician {
  nome: string;
  email: string;
  telefone: string;
  cep: string;
  cidade: string;
  uf: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (message: string) => void;
  mode: "add" | "edit";
  initialData?: Technician | null;
}

export const TechnicianModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  mode,
  initialData,
}) => {
  const [formData, setFormData] = useState<Technician>({
    nome: "",
    email: "",
    telefone: "",
    cep: "",
    cidade: "",
    uf: "",
  });

  useEffect(() => {
    if (mode === "edit" && initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        cep: "",
        cidade: "",
        uf: "",
      });
    }
  }, [isOpen, mode, initialData]);

  const formatCEP = (value: string) =>
    value
      .replace(/\D/g, "")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .substring(0, 9);
  const formatPhone = (value: string) =>
    value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .substring(0, 15);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;
    if (name === "cep") formattedValue = formatCEP(value);
    else if (name === "telefone") formattedValue = formatPhone(value);
    setFormData((prev) => ({ ...prev, [name]: formattedValue }));
  };

  const handleSave = () => {
    console.log("Salvando dados:", formData);
    const successMsg =
      mode === "add"
        ? "TÉCNICO ADICIONADO COM SUCESSO!"
        : "TÉCNICO EDITADO COM SUCESSO!";
    onSuccess(successMsg);
  };

  return (
    <S.Overlay onClick={onClose}>
      <S.ModalContainer onClick={(e) => e.stopPropagation()}>
        <S.ModalHeader>
          {mode === "add" ? "ADICIONAR TÉCNICO" : "EDITAR TÉCNICO"}
        </S.ModalHeader>

        <S.FormGrid>
          <S.FormGroup>
            <label>Nome completo</label>
            <input
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              type="text"
              placeholder="Informe o nome"
            />
          </S.FormGroup>
          <S.FormGroup>
            <label>E-mail</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Informe o e-mail"
            />
          </S.FormGroup>
          <S.FormGroup>
            <label>Telefone</label>
            <input
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              type="text"
              placeholder="(00) 00000-0000"
              maxLength={15}
            />
          </S.FormGroup>
          <S.FormGroup>
            <label>CEP</label>
            <input
              name="cep"
              value={formData.cep}
              onChange={handleChange}
              type="text"
              placeholder="00000-000"
              maxLength={9}
            />
          </S.FormGroup>
          <S.FormGroup>
            <label>Cidade</label>
            <input
              name="cidade"
              value={formData.cidade}
              onChange={handleChange}
              type="text"
              placeholder="Informe a cidade"
            />
          </S.FormGroup>
          <S.FormGroup>
            <label>UF</label>
            <input
              name="uf"
              value={formData.uf}
              onChange={handleChange}
              type="text"
              placeholder="UF"
              maxLength={2}
            />
          </S.FormGroup>
        </S.FormGrid>

        <S.ModalFooter>
          <AppButton
            label="SALVAR"
            background="#004687"
            color="#FFFFFF"
            onClick={handleSave}
          />
          <AppButton
            label="CANCELAR"
            background="#FFFFFF"
            color="#D9534F"
            onClick={onClose}
          />
        </S.ModalFooter>
      </S.ModalContainer>
    </S.Overlay>
  );
};
