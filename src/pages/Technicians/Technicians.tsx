import { useAuth } from '../../hooks/useAuth';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: 'Roboto', sans-serif;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  color: #004687;
  margin-bottom: 20px;
`;

const LogoutButton = styled.button`
  padding: 10px 20px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #c82333;
  }
`;

export default function Technicians() {
  const { signOut } = useAuth();

  return (
    <Container>
      <Title>Painel de Técnicos</Title>
      <p>Bem-vindo ao sistema de gerenciamento da Prática!</p>
      <p style={{ marginBottom: '40px' }}>Esta tela está em desenvolvimento.</p>

      <LogoutButton onClick={signOut}>
        SAIR DO SISTEMA
      </LogoutButton>
    </Container>
  );
}