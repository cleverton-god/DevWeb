# API de Produtos - Mini-Projeto

API RESTful para gerenciamento de produtos construída com Express.js.

## 📁 Estrutura do Projeto (MVC Separado)

```
/Desafio Mini-Projeto
├── .gitignore              # Arquivos ignorados pelo Git
├── package.json           # Configuração do projeto
├── server.js             # Servidor principal
├── data/
│   └── produtos.js       # Dados em memória (Model)
├── services/
│   └── produtosService.js # Lógica de negócios
├── routes/
│   └── produtos.js       # Rotas (Controller)
├── utils/
│   └── validacao.js     # Utilitários de validação
└── README.md            # Documentação
```

## 🚀 Como Executar

### Instalação das dependências:
```bash
npm install
```

### Executar em modo de desenvolvimento (com nodemon):
```bash
npm run dev
```

### Executar em modo produção:
```bash
npm start
```

O servidor estará disponível em: **http://localhost:3000**

## 📋 Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/produtos` | Listar todos os produtos |
| GET | `/produtos/:id` | Buscar produto por ID |
| POST | `/produtos` | Criar novo produto |
| PUT | `/produtos/:id` | Atualizar produto |
| DELETE | `/produtos/:id` | Excluir produto |

## 📝 Exemplos de Requisições

### GET - Listar todos os produtos
```
GET http://localhost:3000/produtos
```

### GET - Buscar por ID
```
GET http://localhost:3000/produtos/1
```

### POST - Criar produto
```
POST http://localhost:3000/produtos
Content-Type: application/json

{
  "nome": "Tablet",
  "descricao": "iPad Pro 12.9 polegadas",
  "preco": 7999.99,
  "categoria": "Eletrônicos",
  "emEstoque": true
}
```

### PUT - Atualizar produto
```
PUT http://localhost:3000/produtos/1
Content-Type: application/json

{
  "nome": "Notebook Atualizado",
  "descricao": "Dell Inspiron 15 Plus",
  "preco": 3499.99,
  "categoria": "Eletrônicos",
  "emEstoque": false
}
```

### DELETE - Excluir produto
```
DELETE http://localhost:3000/produtos/1
```

## ✅ Recursos Implementados

- [x] GET todos os produtos
- [x] GET por ID
- [x] POST (criar com validação)
- [x] PUT (atualizar com validação)
- [x] DELETE (excluir)
- [x] Validação completa (nome, descrição, preço, categoria)
- [x] ID automático
- [x] Arquivo de rota próprio
- [x] Service layer (lógica de negócios separada)
- [x] Utils (validação reutilizável)
- [x] Estrutura organizada (MVC)
- [x] Sem banco de dados (array em memória)
- [x] Nodemon para desenvolvimento
- [x] .gitignore configurado

