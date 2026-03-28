##📝 Comentários Técnicos – Frontend (27/03)

📌 Progresso do Desafio
[x] Setup Inicial: Repositório pratica-challenge-frontend criado e configurado com Vite + React + TypeScript.
[x] Estrutura de Pastas: Organização modular definida (api, components, pages, contexts).
[x] Desenvolvimento da Tela de Login:
[x] Implementação do layout Split Screen fiel ao design do Adobe XD.
[x] Resolução do problema de transparência no border-radius do painel lateral.
[x] Componentização da imagem de fachada (PraticaBuildingBackground) com object-fit: cover.

🛠️ Decisões Técnicas
Styled Components: Escolhido para garantir o encapsulamento dos estilos e facilitar a manutenção de componentes dinâmicos.
Camadas de Z-Index: Utilizado para garantir que o painel de formulário sobreponha a imagem de fundo, permitindo que a curvatura lateral revele a fachada sem exibir espaços vazios.
Refatoração de Estilos: Remoção de estilos redundantes (Label, FormGroup) do arquivo principal de login, movendo-os para dentro dos componentes reutilizáveis de Input para manter o código limpo (Clean Code).
🎨 Detalhes de Implementação (UI/UX)
Fidelidade ao Designer:
Painel Esquerdo: width: 660px, cor #004687, borda direita de 30px.
Painel Direito: width: 746px, borda lateral #707070.
Responsividade: Implementação de media queries para ocultar o painel de imagem em dispositivos móveis (abaixo de 900px) e ajustar o formulário para tela cheia.
🚀 Próximos Passos

 28-03
[ ] Integração com a API de autenticação via Axios.
[ ] Tratamento de estados de erro e carregamento (loading) no formulário.
[ ] Implementar Context API para gerenciamento do estado global de autenticação.
[ ] Criar Rotas Privadas para proteger a listagem de técnicos.
[ ] Desenvolver a tela de listagem e o CRUD de Técnicos.
[ ] Adicionar máscaras de entrada (Telefone/CEP) nos formulários de cadastro.

