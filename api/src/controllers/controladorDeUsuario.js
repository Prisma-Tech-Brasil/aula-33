const servicoDeUsuario = require("../services/servicoDeUsuario");

exports.obterTodosUsuarios = async (_req, res) => {
  try {
    const usuarios = await servicoDeUsuario.obterTodosUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(500).send("Erro ao recuperar usuários");
  }
};

exports.adicionarUsuario = async (req, res) => {
  const usuario = req.body;
  try {
    const novoUsuario = await servicoDeUsuario.adicionarUsuario(usuario);
    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(500).send("Erro ao adicionar usuário");
  }
};
