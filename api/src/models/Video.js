class Video {
  constructor(id, titulo, descricao, quantidadeViews, image, canalID) {
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.quantidadeViews = quantidadeViews;
    this.image = image;
    this.canalID = canalID;
  }

  // Método para simular pegar o canal associado
  pegaCanal() {
    return `Canal de ID: ${this.canalID}`;
  }

  // Método para exibir informações do vídeo
  exibirInfo() {
    return `${this.titulo} - ${this.descricao} (Views: ${this.quantidadeViews})`;
  }

  // Método para adicionar uma visualização
  adicionarView() {
    this.quantidadeViews += 1;
  }
}

module.exports = Video;
