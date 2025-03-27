const RepositorioDeUsuario = require("../repositories/repositorioDeUsuario");
const Usuario = require("../models/Usuario");

class ServicoDeUsuario {
  async obterTodosUsuarios() {
    return await RepositorioDeUsuario.encontrarTodosUsuarios();
  }

  async adicionarUsuario(dadosUsuario) {
    const novoUsuario = new Usuario(
      dadosUsuario.nome,
      dadosUsuario.cpf,
      dadosUsuario.email
    );
    return await RepositorioDeUsuario.adicionarUsuario(novoUsuario);
  }
}

module.exports = new ServicoDeUsuario();
