
const express = require("express");
const router = express.Router();

const usuariosController = require("../controllers/usuariosController");

/* -------------------------
   ROTAS
-------------------------- */

// GET /api/usuarios - Listar todos
router.get("/", usuariosController.listarUsuarios);

// GET /api/usuarios/total - Contar usuários
router.get("/total", usuariosController.contarUsuarios);

// GET /api/usuarios/:id - Buscar por ID
router.get("/:id", usuariosController.buscarUsuario);


// POST /api/usuarios - Criar usuário
router.post("/", usuariosController.criarUsuario);

// PUT /api/usuarios/:id - Atualizar usuário
router.put("/:id", usuariosController.atualizarUsuario);

// DELETE /api/usuarios/:id - Deletar usuário
router.delete("/:id", usuariosController.deletarUsuario);

module.exports = router;

