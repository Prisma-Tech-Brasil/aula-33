const repositorioDeUsuario = require("../repositories/repositorioDeUsuario");
const Usuario = require("../models/Usuario");

exports.obterTodosUsuarios = async () => {
  return await repositorioDeUsuario.encontrarTodosUsuarios();
};

exports.adicionarUsuario = async (dadosUsuario) => {
  // Instancia a classe Usuario
  const novoUsuario = new Usuario(
    dadosUsuario.nome,
    dadosUsuario.cpf,
    dadosUsuario.email
  );

  // Passa o novo usuário para o repositório
  return await repositorioDeUsuario.adicionarUsuario(novoUsuario);
};
