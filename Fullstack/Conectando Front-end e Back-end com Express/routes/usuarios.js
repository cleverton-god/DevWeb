const express = require("express");
const router = express.Router();

let usuarios = [];
let idAtual = 1;

/* -------------------------
   FUNÇÕES DE LÓGICA
-------------------------- */

function listarUsuarios() {
  return usuarios;
}

function criarUsuario(dados) {

  if (!dados.nome || !dados.idade) {
    throw new Error("Nome e idade são obrigatórios");
  }

  if (dados.idade < 0) {
    throw new Error("Idade inválida");
  }

  const novoUsuario = {
    id: idAtual++,
    nome: dados.nome,
    idade: dados.idade
  };

  usuarios.push(novoUsuario);

  return novoUsuario;
}

/* -------------------------
   ROTAS
-------------------------- */

router.get("/", (req, res) => {
  res.json(listarUsuarios());
});

router.post("/", (req, res) => {

  try {

    const usuarioCriado = criarUsuario(req.body);

    res.status(201).json(usuarioCriado);

  } catch (erro) {

    res.status(400).json({ erro: erro.message });

  }

});

module.exports = router;
