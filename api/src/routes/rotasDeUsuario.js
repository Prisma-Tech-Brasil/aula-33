const express = require("express");
const router = express.Router();
const controladorDeUsuario = require("../controllers/controladorDeUsuario");

router.get("/", controladorDeUsuario.obterTodosUsuarios);

router.post("/", controladorDeUsuario.adicionarUsuario);

module.exports = router;
