🚀 HowProductive

HowProductive é uma aplicação web gamificada focada em produtividade diária, onde usuários criam e cumprem metas, acumulam pontos e competem em um ranking global com outros usuários.

O objetivo é incentivar hábitos produtivos através de gamificação, recompensando o cumprimento de tarefas e penalizando o não cumprimento dentro do tempo estipulado.

🧠 Conceito da Aplicação

Usuários definem metas/tarefas diárias

Cada tarefa possui:

Tempo determinado

Pontuação associada

Ao concluir uma tarefa no prazo → ganha pontos

Ao não concluir no prazo → perde pontos

Todos os usuários participam de um ranking global

Os 3 usuários mais produtivos ficam sempre em destaque no ranking

🛠️ Tecnologias Utilizadas
Front-end

React

Vite

CSS puro

React Icons

Back-end (em desenvolvimento)

Node.js

Express

PostgreSQL

📦 Estrutura do Projeto
howproductive/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   └── Login/
│   │   │       ├── Login.jsx
│   │   │       └── Login.css
│   │   ├── assets/
│   │   └── main.jsx
│   └── vite.config.js
│
├── backend/   # (planejado)
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   └── server.js
│   └── package.json
│
└── README.md

🎮 Funcionalidades Planejadas

Autenticação de usuários

Criação e gerenciamento de tarefas

Sistema de pontuação automática

Ranking global de produtividade

Destaque para os 3 usuários mais produtivos

Histórico diário/semanal de desempenho

Login social (Google)

Interface responsiva (desktop e mobile)

✅ Funcionalidades Implementadas (até o momento)

Tela de Login

Layout moderno

Floating labels

Integração visual com login via Google

Responsividade para mobile

Estrutura inicial do projeto em React com Vite

🖥️ Tela Atual

Atualmente, o projeto conta apenas com a tela de login no front-end, servindo como base visual e estrutural para as próximas funcionalidades.

🚧 Status do Projeto

📌 Em desenvolvimento

O projeto está em fase inicial, com foco atual na construção do front-end e definição da arquitetura do sistema.

▶️ Como Rodar o Projeto (Front-end)
# Clone o repositório
git clone https://github.com/seu-usuario/howproductive.git

# Entre na pasta do front-end
cd frontend

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev


A aplicação ficará disponível em:

http://localhost:5173
