import axios from "axios";
export default class GenerosApi {
  async buscarTodosOsGeneros() {
    const response = await axios.get('https://uranos-bookshop.herokuapp.com/generos');
    return response.data;
  }

  async buscarGenero(id) {
    const response = await axios.get(`https://uranos-bookshop.herokuapp.com/generos/${id}`);
    return response.data;
  }

  async adicionarGenero(genero) {
    const response = await axios.post('https://uranos-bookshop.herokuapp.com/generos', genero);
    return response.data;
  }

  async excluirGenero(id) {
    const response = await axios.delete(`https://uranos-bookshop.herokuapp.com/generos/${id}`);
    return response.data;
  }

  async atualizarGenero(genero) {
    const response = await axios.put(
      `https://uranos-bookshop.herokuapp.com/generos/${genero.id}`,
      genero,
    );
    return response.data;
  }
}