const geradorDeID = require("../utils/geradorDeID");

class Usuario {
  constructor(nome, cpf, email) {
    this.id = geradorDeID();
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
  }
}

module.exports = Usuario;
