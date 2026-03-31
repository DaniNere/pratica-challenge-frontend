import React, { useEffect, useState } from "react";
import * as S from "./TechnicianModal.styles";
import { TechnicianService } from "../../services/TechnicianService";
import { 
  formatCEP, 
  formatPhone, 
  formatUF, 
  validateEmail 
} from "../../helpers/formatters";
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

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setFieldErrors({});
      if (mode === "edit" && initialData) {
        setFormData({
          fullName: initialData.fullName,
          email: initialData.email,
          phone: initialData.phone,
          zipCode: initialData.zipCode,
          city: initialData.city,
          state: initialData.state,
        });
      } else {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          zipCode: "",
          city: "",
          state: "",
        });
      }
    }
    setError(null);
  }, [isOpen, mode, initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Aplicação das máscaras via helpers (conforme página 3 do PDF)
    if (name === "zipCode") formattedValue = formatCEP(value);
    else if (name === "phone") formattedValue = formatPhone(value);
    else if (name === "state") formattedValue = formatUF(value);

    setFormData((prev) => ({ ...prev, [name]: formattedValue }));

    // Limpa erro visual ao digitar
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (formData.fullName.trim().length < 3) errors.fullName = "Nome obrigatório";
    if (!validateEmail(formData.email)) errors.email = "E-mail inválido";
    if (formData.phone.length < 14) errors.phone = "Telefone inválido";
    if (formData.zipCode.length !== 9) errors.zipCode = "CEP inválido";
    if (!formData.city.trim()) errors.city = "Cidade obrigatória";
    if (formData.state.length !== 2) errors.state = "UF inválida";

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSave = async () => {
    if (!validateForm()) {
      setError("Existem erros nos campos obrigatórios.");
      return;
    }

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
      setError("Falha ao salvar técnico. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  const fields = [
    { label: "Nome completo", name: "fullName", placeholder: "Informe o nome" },
    { label: "E-mail", name: "email", placeholder: "Informe o e-mail" },
    { label: "Telefone", name: "phone", placeholder: "(00) 0 0000-0000" },
    { label: "CEP", name: "zipCode", placeholder: "00000-000" },
    { label: "Cidade", name: "city", placeholder: "Informe a cidade" },
    { label: "UF", name: "state", placeholder: "MG" },
  ];

  return (
    <S.Overlay onClick={onClose}>
      <S.ModalContainer onClick={(e) => e.stopPropagation()}>
        <S.ModalHeader>
          {mode === "add" ? "ADICIONAR TÉCNICO" : "EDITAR TÉCNICO"}
        </S.ModalHeader>

        {error && (
          <p style={{ color: "#D9534F", textAlign: "center", fontSize: "12px", marginTop: "10px" }}>
            {error}
          </p>
        )}

        <S.FormGrid>
          {fields.map((f) => {
            const fieldName = f.name as keyof CreateTechnicianPayload;            
            return (
              <S.FormGroup key={f.name}>
                <label>{f.label}</label>
                <input
                  name={f.name}
                  value={formData[fieldName]}
                  onChange={handleChange}
                  placeholder={f.placeholder}
                  style={{
                    borderColor: fieldErrors[f.name] ? "#D9534F" : "#ddd",
                  }}
                />
                {fieldErrors[f.name] && (
                  <span style={{ color: "#D9534F", fontSize: "10px" }}>
                    {fieldErrors[f.name]}
                  </span>
                )}
              </S.FormGroup>
            );
          })}
        </S.FormGrid>

        <S.ModalFooter>
          <S.SaveButton onClick={handleSave} disabled={isLoading}>
            SALVAR
          </S.SaveButton>
          <S.CancelButton onClick={onClose}>CANCELAR</S.CancelButton>
        </S.ModalFooter>
      </S.ModalContainer>
    </S.Overlay>
  );
};