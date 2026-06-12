# 📚 Sistema Acervus — Gerenciador de Empréstimos de Livros

Este repositório contém o ecossistema completo do **Acervus**, uma aplicação desenvolvida para facilitar o registro e o histórico de devoluções de livros. O projeto é composto por uma API REST robusta no backend e um aplicativo dinâmico de tela única no frontend mobile.

---

## 🗺️ Visão Geral da Arquitetura

O ecossistema é dividido em duas partes principais que se comunicam via requisições HTTP:

1. **gerenlib-backend** — API desenvolvida em Node.js e Express, conectada ao banco de dados NoSQL MongoDB Atlas e hospedada na nuvem pelo Render.
2. **gerenlib-mobile** — Aplicativo móvel construído em React Native através do ecossistema Expo, que consome os dados da API em tempo real.

---

# 🛠️ Backend (`gerenlib-backend`)

A API centraliza as regras de negócio e persiste as informações dos livros e leitores diretamente na nuvem.

## 🔗 Link de Produção

A API está pública e operacional através da URL:

```text
https://gerenlib-backend.onrender.com
```

## Tecnologias Utilizadas

- **Node.js & Express:** Estrutura base do servidor e gerenciamento de rotas.
- **MongoDB Atlas & Mongoose:** Banco de dados em nuvem e modelagem de dados (ODM).
- **Nodemon:** Monitoramento de arquivos para reinicialização automática em desenvolvimento.
- **Cors:** Permissão de acessos seguros vindos do app mobile.
- **Dotenv:** Proteção de credenciais por variáveis de ambiente.

## Como Rodar o Backend Localmente

### 1. Acesse a pasta do backend

```bash
cd gerenlib-backend
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Crie um arquivo `.env` na raiz do projeto

```env
PORT=3000
MONGO_URI=mongodb+srv://seu_usuario:sua_senha@cluster0.a2gnyjs.mongodb.net/book_loans?appName=Cluster0
```

### 4. Inicie o servidor com Nodemon

```bash
npm run dev
```

---

## 🛣️ Endpoints da API (`/api/loans`)

O formato padrão do JSON aceito para envio (`POST` e `PUT`) é:

```json
{
  "tituloLivro": "O Senhor dos Anéis",
  "nomeLeitor": "João da Silva",
  "dataDevolucao": "2026-12-31T00:00:00.000Z"
}
```

| Método | Rota | Descrição |
|---------|---------|---------|
| GET | `/` | Verifica o status do servidor |
| GET | `/api/loans` | Retorna a lista completa de registros |
| GET | `/api/loans/:id` | Retorna um registro específico por ID |
| POST | `/api/loans` | Registra uma nova devolução |
| PUT | `/api/loans/:id` | Atualiza um registro existente |
| DELETE | `/api/loans/:id` | Remove permanentemente um registro |

---


## 🚀 Funcionalidades Gerais do Sistema

- Cadastro de empréstimos de livros.
- Atualização de registros existentes.
- Exclusão de registros.
- Consulta de histórico completo.
- Persistência de dados em nuvem via MongoDB Atlas.
- API REST hospedada no Render.
- Aplicativo mobile integrado em tempo real.

---

Este projeto foi desenvolvido para fins acadêmicos e educacionais.
