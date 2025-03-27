class RepositorioDeUsuario {
  constructor() {
    this.usuarios = [
      { id: 1, nome: "Alice" },
      { id: 2, nome: "Bob" },
      { id: 3, nome: "Carol" }
    ];
  }

  async encontrarTodosUsuarios() {
    return this.usuarios;
  }

  async adicionarUsuario(usuario) {
    this.usuarios.push(usuario);
    return usuario;
  }
}

module.exports = new RepositorioDeUsuario();
