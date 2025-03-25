const repositorioDeUsuario = require("../repositories/repositorioDeUsuario");

class ServicosDeUsuario {
  obterTodosUsuarios = async () => {
    return await repositorioDeUsuario.encontrarTodosUsuarios();
  };
}

module.exports = new ServicosDeUsuario();