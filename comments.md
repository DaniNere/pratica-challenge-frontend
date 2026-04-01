# Comentários Técnicos – Frontend

## Progresso do Desafio (Frontend) 28-03 e 29-03

- [x] Setup Inicial: Projeto estruturado com Vite + React + TypeScript para máxima performance.
- [x] Estrutura de Pastas: Organização modular (assets, components, hooks, pages, styles, types).
- [x] Tela de Login: Layout Split Screen rigorosamente fiel ao Adobe XD (1366x768).
- [x] Gestão de Autenticação:
  - [x] Criação do AuthContext para gerenciamento global do estado de login.
  - [x] Persistência do Token JWT via localStorage.
  - [x] Implementação de PrivateRoute com <Outlet /> (React Router v6).
- [x] Tela de Login (UI/UX)
- [x] Gestão de Técnicos (UI/UX):
- [x] Tela de listagem com Sidebar e Header funcional.
- [x] Tabela de técnicos com ações de Editar e Excluir.
- [x] TechnicianModal: Formulário completo para Criação/Edição com máscaras de CEP e Telefone.
- [x] ConfirmationModal: Fluxos de segurança para excluir técnico e cancelar edição.
- [x] Sistema de Toast: Feedback visual de sucesso (3s) em conformidade com o layout.

## Decisões Técnicas

- Styled Components: Escolhido para garantir o encapsulamento do CSS e permitir o uso de props dinâmicas (ex: efeito de Blur no container quando modais estão abertos). Mantendo a fidelidade ao designer.
- Context API & Custom Hooks: Centralização da lógica de autenticação no useAuth, permitindo que qualquer componente acesse o estado de login de forma limpa.
- Atomic Design Adaptado: Componentização de elementos base (Button, Inputs, Modais, Toast) para reaproveitamento total entre as telas de Login e Técnicos.
- Fidelidade de Design:
  - Uso de medidas exatas do protótipo.
  - Implementação de estados de hover e active nos botões e itens de menu.
  - Tratamento de fechamento de modais com stopPropagation para evitar comportamentos indesejados no overlay.

## Detalhes de Implementação (UI/UX)

- Máscaras de Input: Implementadas funções de tratamento de string em tempo real para: CEP: 00000-000 Telefone: (00) 00000-0000
- Feedback de Sucesso (Toast): Componente posicionado no topo da tela, com fundo verde (#28A745) e fechamento automático após 3000ms.
- Segurança Visual: Modais de confirmação impedem ações acidentais em processos destrutivos (Excluir).
- Blur Dinâmico: Aplicação de filtro blur(5px) no conteúdo principal sempre que um modal ou toast de confirmação é exibido.

## Próximos Passos (Integração) 30-03

- [x] Consumo de API: Substituir os dados mockados (techniciansData) por chamadas reais via Axios.
- [x] Integração CRUD:
  - Conectar o handleSave do modal ao POST e PUT do backend.
  - Conectar o confirmDelete ao DELETE (soft delete) da API.
- [x] Interceptors Axios: Configurar o envio automático do Authorization: Bearer <token> em todas as requisições para as rotas protegidas.
- [x] Tratamento de Erros da API: Exibir Toasts de erro caso a conexão com o banco Azure SQL falhe ou o e-mail já exista.
- Ficou excelente a estrutura! Esse documento ajuda muito a provar a senioridade do seu código no desafio. Algo mais que queira incluir antes de fecharmos essa parte?

## Progresso do Desafio (Frontend) 31-03

- [x] Refinamento de UI/UX (Fidelidade Extrema):
- [x] Sidebar Adaptativa: Implementação da lógica de minimização/recolhimento com transições suaves (0.3s).
- [x] Preservação de Layout: Ajuste no LogoWrapper e MenuItem para evitar o deslocamento vertical (pulo) de componentes ao ocultar elementos.
- [x] Interatividade Avançada: Criação de ToggleButton flutuante com efeito de fade-in inteligente via seletor de hover na Sidebar.
- [x] Matriz de Transformação CSS: Aplicação de matrix() e rotate() para garantir que a iconografia siga exatamente o comportamento de rotação previsto no Adobe XD.
- [x] Sincronização de estados de hover entre o container pai (Sidebar) e elementos filhos (Botão de controle).
- [x] Validação dos campos obrigatórios no CREATE e UPDATE de técnico
- [x] Criação e testes unitários

## Diferenciais Técnicos Implementados

- [x] Testes Unitários com Vitest: Implementação de testes automatizados para garantir que as regras de negócio de CEP, E-mail e UF funcionem antes mesmo da persistência de dados.
- [x] Tipagem Estrita com TypeScript: Zero uso de any. Toda a comunicação entre Modais, Services e API foi tipada para evitar bugs em produção.
- [x] Organização de Helpers: Lógica de máscaras e validadores isolada, permitindo fácil manutenção e alta testabilidade.

## O que eu melhoraria com mais tempo (Frontend)

Conforme solicitado, caso houvesse mais tempo para refinamento, os próximos passos seriam:

- Autopreenchimento via CEP:
  - Implementaria a integração com uma API (ex: BrasilAPI ou ViaCEP) consumida via Backend.
  - Ao perder o foco do campo de CEP, o sistema realizaria um GET para buscar automaticamente o Logradouro, Bairro, Cidade e UF, bloqueando esses campos para edição manual e garantindo 100% de integridade dos dados geográficos.
- Acessibilidade (A11y):
  - Adição de suporte completo para leitores de tela e navegação por teclado (tabindex) em todos os modais e na Sidebar.
- Deploy e CI/CD:
  - Configuração de um pipeline no GitHub Actions para rodar os testes unitários automaticamente a cada commit.
  - Hospedagem da aplicação no GCP (Google Cloud Platform) ou Vercel para visualização online.
- Containerização:
  - Criação de um ambiente Dockerizado (Dockerfile e docker-compose.yml) para facilitar o setup do projeto em qualquer máquina de desenvolvedor.
- Testes de Integração (E2E):
  - Utilização de Cypress ou Playwright para testar o fluxo crítico do usuário: Login -> Cadastro -> Edição -> Exclusão.