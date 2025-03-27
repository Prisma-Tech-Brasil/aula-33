const ServicoDeUsuario = require("../services/servicoDeUsuario");

class ControladorDeUsuario {
  async obterTodosUsuarios(_req, res) {
    try {
      const usuarios = await ServicoDeUsuario.obterTodosUsuarios();
      res.json(usuarios);
    } catch (error) {
      res.status(500).send("Erro ao recuperar usuários");
    }
  }

  async adicionarUsuario(req, res) {
    const usuario = req.body;

    if (!usuario.nome || !usuario.email || !usuario.cpf) {
      return res.status(400).send("Todos os campos (nome, email, cpf) são obrigatórios.");
    }

    try {
      const novoUsuario = await ServicoDeUsuario.adicionarUsuario(usuario);
      res.status(201).json(novoUsuario);
    } catch (error) {
      res.status(500).send("Erro ao adicionar usuário");
    }
  }
}

module.exports = new ControladorDeUsuario();
