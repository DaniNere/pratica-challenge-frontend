import { useState, useEffect } from "react";
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
import { TechnicianService } from "../../services/TechnicianService";

export default function TechniciansScreen() {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const [technicians, setTechnicians] = useState<Technician[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isCancelConfirmOpen, setIsCancelConfirmOpen] = useState(false);
  const [toast, setToast] = useState({ open: false, message: "" });
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [selectedTech, setSelectedTech] = useState<Technician | null>(null);
  const [techToDelete, setTechToDelete] = useState<Technician | null>(null);

  const fetchTechnicians = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await TechnicianService.listAllTechnicians();
      setTechnicians(data);
    } catch {
      setError(
        "Não foi possível carregar os técnicos. Tente novamente mais tarde.",
      );
      setToast({ open: true, message: "Erro ao carregar técnicos!" });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTechnicians();
  }, []);

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

  const confirmDelete = async () => {
    if (techToDelete && techToDelete.id) {
      try {
        await TechnicianService.deleteTechnician(techToDelete.id);
        setIsDeleteModalOpen(false);
        setToast({ open: true, message: "TÉCNICO EXCLUÍDO COM SUCESSO!" });
        setTechToDelete(null);
        fetchTechnicians();
      } catch {
        setToast({ open: true, message: "Erro ao excluir técnico!" });
      }
    }
  };

  const handleSuccess = (message: string) => {
    setIsModalOpen(false);
    setToast({ open: true, message: message });
    fetchTechnicians();
  };

  
  const filteredTechnicians = technicians.filter(
    (tech) => {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      if (!lowerCaseSearchTerm.trim()) {
        return true;
      }

      
      const isSearchTermNumeric = !isNaN(Number(searchTerm)) && searchTerm.trim() !== '';
      const techIdAsString = tech.id ? tech.id.toString() : '';

      return (
        tech.fullName.toLowerCase().startsWith(lowerCaseSearchTerm) || 
        tech.email.toLowerCase().startsWith(lowerCaseSearchTerm) ||    
        tech.phone.startsWith(searchTerm) ||                           
        tech.city.toLowerCase().startsWith(lowerCaseSearchTerm) ||     
        tech.state.toLowerCase().startsWith(lowerCaseSearchTerm) ||    
        (isSearchTermNumeric && techIdAsString.startsWith(lowerCaseSearchTerm)) 
      );
    }
  );

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
                  <th>Nome Completo</th>
                  <th>E-mail</th>
                  <th>Telefone</th>
                  <th>Cidade</th>
                  <th>UF</th>
                  <th style={{ textAlign: "center" }}>Ações</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan={6} style={{ textAlign: "center" }}>
                      Carregando técnicos...
                    </td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td
                      colSpan={6}
                      style={{ textAlign: "center", color: "red" }}
                    >
                      {error}
                    </td>
                  </tr>
                ) : filteredTechnicians.length === 0 ? (
                  <tr>
                    <td colSpan={6} style={{ textAlign: "center" }}>
                      Nenhum técnico encontrado.
                    </td>
                  </tr>
                ) : (
                  filteredTechnicians.map((tech) => (
                    <tr key={tech.id}>
                      <td>{tech.fullName}</td>
                      <td>{tech.email}</td>
                      <td>{tech.phone}</td>
                      <td>{tech.city}</td>
                      <td>{tech.state}</td>
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
                  ))
                )}
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