# 🛠️ Prática Challenge – Gestão de Técnicos Parceiros

Este projeto é o frontend de uma plataforma de gestão de técnicos parceiros da **Prática**, desenvolvido como parte de um desafio técnico. A aplicação permite o controle completo (CRUD) de técnicos, com foco em alta fidelidade ao design (Pixel Perfect), performance e experiência do usuário (UX).

---

## 🚀 Funcionalidades

- **Gestão de Autenticação:** Sistema de login seguro com persistência de token JWT via `localStorage` e rotas protegidas.
- **CRUD Completo de Técnicos:** Listagem, criação, edição e exclusão (soft delete) de técnicos.
- **Busca em Tempo Real:** Filtro inteligente na listagem por nome.
- **Interface Responsiva:** Layout adaptável para resoluções desktop (foco em 1366x768 conforme protótipo) e mobile.
- **Experiência do Usuário (UX):**
  - Máscaras dinâmicas para campos de Telefone e CEP.
  - Sistema de notificações (Toast) para feedbacks de sucesso e erro.
  - Modais de confirmação para ações críticas (exclusão e cancelamento).
  - Efeitos visuais de Blur no conteúdo principal durante a exibição de overlays.
  - Sidebar minimizável para otimização de espaço.

---

## 🧪 Tecnologias Utilizadas

- **React.js (Vite):** Para uma inicialização rápida e hot-reload eficiente.
- **TypeScript:** Tipagem estática para maior segurança e manutenibilidade do código.
- **Styled Components:** CSS-in-JS para estilização modular e uso de propriedades dinâmicas.
- **React Router v6:** Gerenciamento de rotas e proteção de acesso.
- **Axios:** Integração com API REST e configuração de interceptors para autenticação.
- **Lucide React:** Conjunto de ícones leves e consistentes.

---

## 📐 Arquitetura e Decisões Técnicas

A estrutura do projeto foi pensada para escalabilidade e separação de responsabilidades:

1.  **Atomic Design (Adaptado):** Componentes pequenos e reutilizáveis (Botões, Inputs, Toasts) organizados de forma modular.
2.  **Context API:** Utilizada para o `AuthContext`, centralizando o estado global de autenticação e injetando o token automaticamente nas requisições via interceptors do Axios.
3.  **Service Layer:** Criação de camadas de serviço (`TechnicianService`, `authService`) para isolar a lógica de chamadas à API dos componentes de UI.
4.  **Custom Hooks:** Uso de hooks personalizados como `useAuth` para simplificar o acesso aos contextos.
5.  **Performance:** Implementação de `useMemo` em lógicas de filtragem para evitar re-renderizações desnecessárias em listas grandes.

---

## 📂 Estrutura de Pastas

```bash
src/
 ├── api/           
 ├── assets/        
 ├── components/    
 ├── contexts/      
 ├── hooks/         
 ├── pages/         
 ├── routes/        
 ├── services/            
 └── types/         
```

---

## 🔧 Instalação e Execução

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/DaniNere/pratica-challenge-frontend
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure a URL da API:**
    A conexão com o backend é centralizada no arquivo `src/api/api.ts`. 
    Abra o arquivo e verifique a propriedade `baseURL`. Por padrão, ela está configurada para apontar para o servidor local ou para a URL de produção definida no código.


4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

---

## 📝 Scripts Disponíveis

- `npm run dev`: Inicia o servidor local.
- `npm run build`: Gera a build de produção na pasta `dist/`.
- `npm run preview`: Pré-visualiza a build de produção localmente.
- `npm run lint`: Executa a verificação do ESLint para garantir a qualidade do código.
- `npm run test`: Executa testes unitários.

---

## 👤 Autor

Desenvolvido por **Danielle Nere** – LinkedIn | GitHub

---
