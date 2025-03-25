const servicosDeUsuario = require("../services/servicosDeUsuario");

class ControladorDeUsuario {
  obterTodosUsuarios = async (_req, res) => {
    try {
      const usuarios = await servicosDeUsuario.obterTodosUsuarios();
      res.json(usuarios);
    } catch (error) {
      res.status(500).send("Erro ao recuperar usuários");
    }
  };
}

module.exports = new ControladorDeUsuario();
