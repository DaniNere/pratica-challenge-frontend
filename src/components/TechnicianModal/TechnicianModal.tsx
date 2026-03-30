import React, { useEffect, useState } from "react";
import * as S from "./TechnicianModal.styles";
import { AppButton } from "../../components/Button/Button";
import { TechnicianService } from "../../services/TechnicianService";
import type {
  CreateTechnicianPayload,
  ModalProps,
  UpdateTechnicianPayload,
} from "../../types/technician";

export const TechnicianModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  mode,
  initialData,
}) => {
  const [formData, setFormData] = useState<CreateTechnicianPayload>({
    fullName: "",
    email: "",
    phone: "",
    zipCode: "",
    city: "",
    state: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen && mode === "edit" && initialData) {
      setFormData({
        fullName: initialData.fullName,
        email: initialData.email,
        phone: initialData.phone,
        zipCode: initialData.zipCode,
        city: initialData.city,
        state: initialData.state,
      });
    } else if (isOpen && mode === "add") {
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        zipCode: "",
        city: "",
        state: "",
      });
    }
    setError(null);
    setIsLoading(false);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;
    if (name === "zipCode") formattedValue = formatCEP(value);
    else if (name === "phone") formattedValue = formatPhone(value);
    setFormData((prev) => ({ ...prev, [name]: formattedValue }));
  };

  const handleSave = async () => {
    setIsLoading(true);
    setError(null);

    try {
      if (mode === "add") {
        await TechnicianService.createTechnician(formData);
        onSuccess("TÉCNICO ADICIONADO COM SUCESSO!");
      } else if (mode === "edit" && initialData?.id) {
        const dataToUpdate: UpdateTechnicianPayload = {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          zipCode: formData.zipCode,
          city: formData.city,
          state: formData.state,
        };
        await TechnicianService.updateTechnician(initialData.id, dataToUpdate);
        onSuccess("TÉCNICO ATUALIZADO COM SUCESSO!");
      }
    } catch {
      setError(`Falha ao ${mode === "add" ? "adicionar" : "atualizar"} técnico. Verifique os dados e tente novamente.`);
      onSuccess(`Erro ao ${mode === "add" ? "adicionar" : "atualizar"} técnico!`);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <S.Overlay onClick={onClose}>
      <S.ModalContainer onClick={(e) => e.stopPropagation()}>
        <S.ModalHeader>
          {mode === "add" ? "ADICIONAR TÉCNICO" : "EDITAR TÉCNICO"}
        </S.ModalHeader>

        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

        <S.FormGrid>
          <S.FormGroup>
            <label>Nome completo</label>
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              type="text"
              placeholder="Informe o nome"
              disabled={isLoading}
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
              disabled={isLoading}
            />
          </S.FormGroup>
          <S.FormGroup>
            <label>Telefone</label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="text"
              placeholder="(00) 00000-0000"
              maxLength={15}
              disabled={isLoading}
            />
          </S.FormGroup>
          <S.FormGroup>
            <label>CEP</label>
            <input
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              type="text"
              placeholder="00000-000"
              maxLength={9}
              disabled={isLoading}
            />
          </S.FormGroup>
          <S.FormGroup>
            <label>Cidade</label>
            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              type="text"
              placeholder="Informe a cidade"
              disabled={isLoading}
            />
          </S.FormGroup>
          <S.FormGroup>
            <label>UF</label>
            <input
              name="state"
              value={formData.state}
              onChange={handleChange}
              type="text"
              placeholder="UF"
              maxLength={2}
              disabled={isLoading}
            />
          </S.FormGroup>
        </S.FormGrid>

        <S.ModalFooter>
          <AppButton
            label={isLoading ? "SALVANDO..." : "SALVAR"}
            background="#004687"
            color="#FFFFFF"
            onClick={handleSave}
            disabled={isLoading}
          />
          <AppButton
            label="CANCELAR"
            background="#FFFFFF"
            color="#D9534F"
            onClick={onClose}
            disabled={isLoading}
          />
        </S.ModalFooter>
      </S.ModalContainer>
    </S.Overlay>
  );
};