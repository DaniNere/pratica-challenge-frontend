import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import * as S from "./Technicians.styles";
import editIcon from "../../assets/Editar.svg";
import deleteIcon from "../../assets/Excluir.svg";
import logoWhite from "../../assets/MPS.svg";
import tecnicoIcon from "../../assets/Icon feather-users.svg";
import { Header } from "../../components/Header/Header";
import { TechnicianModal } from "../../components/TechnicianModal/TechnicianModal";
import { ConfirmationModal } from "../../components/ConfirmationModal/ConfirmationModal";
import { Toast } from "../../components/Toast/Toast";
import type { Technician } from "../../types/technician";

const techniciansData: Technician[] = [
  {
    id: 1,
    nome: "Danielle Lima",
    email: "danielle.lima@pratica.com",
    telefone: "(11) 98888-7777",
    cep: "01000-000",
    cidade: "São Paulo",
    uf: "SP",
  },
  {
    id: 2,
    nome: "João Silva",
    email: "joao.silva@pratica.com",
    telefone: "(11) 97777-6666",
    cep: "09000-000",
    cidade: "São Bernardo",
    uf: "SP",
  },
];

export default function TechniciansScreen() {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isCancelConfirmOpen, setIsCancelConfirmOpen] = useState(false);
  const [toast, setToast] = useState({ open: false, message: "" });
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [selectedTech, setSelectedTech] = useState<Technician | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [techToDelete, setTechToDelete] = useState<Technician | null>(null);

  const handleLogout = () => {
    signOut();
    navigate("/");
  };

  const handleAddClick = () => {
    setModalMode("add");
    setSelectedTech(null);
    setIsModalOpen(true);
  };

  const handleEditClick = (tech: Technician) => {
    setModalMode("edit");
    setSelectedTech(tech);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (tech: Technician) => {
    setTechToDelete(tech);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    setIsDeleteModalOpen(false);
    setToast({ open: true, message: "TÉCNICO EXCLUÍDO COM SUCESSO!" });
    setTechToDelete(null);
  };

  const handleSuccess = (message: string) => {
    setIsModalOpen(false);
    setToast({ open: true, message: message });
  };

  return (
    <>
      <S.ScreenContainer
        $isBlur={
          isModalOpen || isDeleteModalOpen || isCancelConfirmOpen || toast.open
        }
      >
        <S.Sidebar>
          <S.LogoWrapper>
            <img src={logoWhite} alt="Logo" />
          </S.LogoWrapper>
          <S.MenuItem $active>
            <img src={tecnicoIcon} alt="Ícone" />
            <span>TÉCNICOS</span>
          </S.MenuItem>
        </S.Sidebar>

        <S.MainArea>
          <Header onLogout={handleLogout} />

          <S.ContentPadding>
            <S.ActionBar>
              <S.SearchInput>
                <Search size={20} className="search-icon" />
                <input
                  type="text"
                  placeholder="Procurar técnico"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </S.SearchInput>

              <S.AddButton
                label="ADICIONAR TÉCNICO"
                background="#004687"
                color="#FFFFFF"
                onClick={handleAddClick}
              />
            </S.ActionBar>
            <S.TechniciansTable>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>E-mail</th>
                  <th>Telefone</th>
                  <th>Cidade</th>
                  <th>UF</th>
                  <th style={{ textAlign: "center" }}>Ações</th>
                </tr>
              </thead>
              <tbody>
                {techniciansData.map((tech) => (
                  <tr key={tech.id}>
                    <td>{tech.nome}</td>
                    <td>{tech.email}</td>
                    <td>{tech.telefone}</td>
                    <td>{tech.cidade}</td>
                    <td>{tech.uf}</td>
                    <td
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <S.IconButton
                        title="Editar"
                        onClick={() => handleEditClick(tech)}
                      >
                        <img src={editIcon} alt="Editar" />
                      </S.IconButton>
                      <S.IconButton
                        title="Excluir"
                        onClick={() => handleDeleteClick(tech)}
                      >
                        <img src={deleteIcon} alt="Excluir" />
                      </S.IconButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </S.TechniciansTable>
          </S.ContentPadding>
        </S.MainArea>
      </S.ScreenContainer>
      <TechnicianModal
        isOpen={isModalOpen}
        onClose={() => setIsCancelConfirmOpen(true)}
        onSuccess={handleSuccess}
        mode={modalMode}
        initialData={selectedTech}
      />
      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        title="EXCLUIR TÉCNICO"
        message="Deseja excluir o técnico?"
        subMessage="Esta ação não poderá ser desfeita."
        onConfirm={confirmDelete}
        onCancel={() => setIsDeleteModalOpen(false)}
      />
      <ConfirmationModal
        isOpen={isCancelConfirmOpen}
        title="CANCELAR"
        message="Deseja cancelar a edição dos dados do técnico?"
        subMessage="As alterações serão perdidas."
        onConfirm={() => {
          setIsCancelConfirmOpen(false);
          setIsModalOpen(false);
        }}
        onCancel={() => setIsCancelConfirmOpen(false)}
      />
      <Toast
        isOpen={toast.open}
        message={toast.message}
        onClose={() => setToast({ ...toast, open: false })}
      />
    </>
  );
}
