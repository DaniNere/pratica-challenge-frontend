export interface Technician {
  id?: number;
  nome: string;
  email: string;
  telefone: string;
  cep: string;
  cidade: string;
  uf: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: "add" | "edit";
  initialData?: Technician | null;
}