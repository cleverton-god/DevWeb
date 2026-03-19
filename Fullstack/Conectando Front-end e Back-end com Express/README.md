# CRUD Usuários - Fullstack Express + PostgreSQL + Frontend Vanilla JS

[![Node.js](https://img.shields.io/badge/Node.js-v18+-green.svg)](https://nodejs.org)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15+-blue.svg)](https://postgresql.org)
[![Express](https://img.shields.io/badge/Express-4.18-orange.svg)](https://expressjs.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## 📋 Descrição

Aplicação fullstack para **CRUD de usuários**:
- **Back-end**: Node.js + Express + pg (PostgreSQL client)
- **Banco**: PostgreSQL (`webapp` DB, `usuarios` table)
- **Front-end**: HTML5 + Bootstrap5 + Vanilla JavaScript
- **Funcionalidades**: Listar, criar, editar, deletar, contar total usuários + validações server-side

## 🛠️ Tecnologias Usadas

| Categoria | Tech |
|-----------|------|
| Back-end | Node.js, Express.js, pg (PostgreSQL) |
| Banco | PostgreSQL 15+ |
| Front-end | HTML, CSS, Bootstrap 5, Vanilla JS |
| Outros | Nodemon (dev) |

## 🚀 Como Rodar o Projeto

### 1. Pré-requisitos
- [Node.js](https://nodejs.org) v18+
- [PostgreSQL](https://postgresql.org) rodando (`localhost:5432`, user `postgres`, pass `root`)

### 2. Clonar / Instalar
```bash
git clone <repo>
cd Conectando-Front-Back-Express
npm install
```

### 3. Configurar Banco de Dados
1. Abra **pgAdmin** ou **psql**:
```bash
psql -U postgres -h localhost
```

2. Crie DB:
```sql
CREATE DATABASE webapp;
\c webapp
```

3. Crie tabela `usuarios`:
```sql
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL CHECK (LENGTH(TRIM(nome)) >= 3),
    idade INTEGER NOT NULL CHECK (idade >= 0 AND idade <= 120),
    email VARCHAR(255) NOT NULL CHECK (email ~* '@')
);

CREATE INDEX idx_usuarios_email ON usuarios(email);
```

**Schema explicado:**
| Coluna | Tipo | Constraints | Validações App |
|--------|------|-------------|---------------|
| `id` | SERIAL | PRIMARY KEY | Auto-increment |
| `nome` | VARCHAR(255) | NOT NULL, LEN>=3 | Trim, min 3 chars |
| `idade` | INTEGER | NOT NULL, 0-120 | Number válido |
| `email` | VARCHAR(255) | NOT NULL, contem @ | Contains '@' |

### 4. Rodar Servidor
```bash
npm start
# ou
nodemon app.js (dev)
```

Servidor em **http://localhost:3000**


## 📁 Estrutura do Projeto

```
.
├── app.js                 # Servidor Express
├── package.json
├── database/
│   └── db.js             # Pool PostgreSQL
├── controllers/
│   └── usuariosController.js
├── services/
│   └── usuariosService.js # Lógica + SQL + validações
├── routes/
│   └── usuarios.js       # API routes
├── public/
│   ├── index.html
│   ├── lista.html        # Lista + contador
│   ├── cadastro.html
│   ├── editar.html
│   ├── css/style.css
│   └── js/*.js
└── README.md
```


## 📄 Licença
MIT - veja [LICENSE](LICENSE)

Feito com Depressão  e trevas entre outros
