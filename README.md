# PIAP - Personalized Automation

A **PIAP** (Plataforma de Intermediação para Automação Personalizada) é uma plataforma digital que conecta **clientes** que desejam soluções eletrônicas personalizadas com **desenvolvedores e designers especializados** em automação, Arduino, circuitos e impressão 3D.

A ideia surgiu para **facilitar o acesso a projetos personalizados**, permitindo que qualquer pessoa, mesmo sem conhecimento técnico, possa explicar sua necessidade e ser atendida por especialistas em desenvolvimento eletrônico e design de produtos personalizados.

---

## 🧠 Objetivo do Projeto

Oferecer um ambiente intuitivo onde:

- Pessoas comuns possam **enviar suas ideias de automação** ou necessidades específicas.
- Desenvolvedores e designers possam **visualizar e aceitar projetos** conforme sua especialidade.
- Haja uma **comunicação direta e eficiente** entre cliente e especialista para discutir detalhes do projeto.
- O processo seja **seguro, rápido e acessível**, promovendo inovação mesmo em pequena escala.

---

## 👤 Quem pode usar?

- **Clientes**: Pessoas físicas ou empresas com uma ideia, necessidade ou problema que possa ser resolvido com automação, Arduino, sensores, módulos eletrônicos ou impressão 3D.
- **Desenvolvedores**: Técnicos ou engenheiros com experiência em eletrônica, Arduino, ESP, Raspberry Pi, etc.
- **Designers 3D**: Profissionais especializados em modelagem e impressão 3D de peças personalizadas.

---

## 🚀 Tecnologias Utilizadas

- **Frontend**: Vite + Vue 3 + Tailwind CSS
- **Backend**: Node.js + Express + TypeScript (em desenvolvimento)
- **Deploy**: Vercel

---

## 📁 Estrutura do Projeto

PIAP-PersonalizedAutomation/
│
├── client/ # Aplicação frontend (Vue 3)
│ ├── public/
│ ├── src/
│ ├── index.html
│ └── vite.config.ts
│
├── server/ # Backend com Express (WIP)
│ └── index.ts
│
├── .gitignore
├── package.json
└── README.md

yaml
Copiar
Editar

---

## 🔧 Como executar localmente

### 1. Clone o repositório

```bash
git clone https://github.com/Cadu35/PIAP-PersonalizedAutomation.git
cd PIAP-PersonalizedAutomation
2. Instale as dependências do front-end
bash
Copiar
Editar
cd client
npm install
3. Rode o front-end
bash
Copiar
Editar
npm run dev
Acesse em: http://localhost:5173

🌐 Deploy
O front-end está hospedado na Vercel. Para configurar corretamente o deploy:

Configure a Root Directory como client

Build Command: npm run build

Output Directory: dist

📌 Status do Projeto
 Interface de login

 Dashboard de usuário

 Formulário para cadastro de projetos personalizados

 Integração com backend

 Conexão com banco de dados

 Sistema de comunicação entre cliente e desenvolvedor

📬 Contato
Criado por Calebe Alves da Silva — Entre em contato no WhatsApp ou por LinkedIn

📄 Licença
Este projeto está sob a licença MIT.

yaml
Copiar
Editar

---








