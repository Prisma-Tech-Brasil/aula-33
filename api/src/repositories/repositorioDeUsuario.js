const usuarios = [
  { id: 1, nome: "Alice" },
  { id: 2, nome: "Bob" },
  { id: 3, nome: "Carol" }
];

class RepositorioDeUsuario {
  encontrarTodosUsuarios = async () => {
    // Aqui você pode fazer a consulta real ao banco de dados
    return usuarios;
  };
}

module.exports = new RepositorioDeUsuario();
