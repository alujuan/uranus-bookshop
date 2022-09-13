<script>
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      livro: {},
      livros: [],
      categorias: [],
      autores: [],
      editoras: [],
      Livros: [
        {
          isbn: "02ad4d16-be6b-452a-b0de-24e7cf50266c",
          titulo: "H.P Love Craft",
          autor: "Howard Phillips Lovecraft",
          editora: "xxx",
          genero: "xxx",
          quant: "2",
          preco: "R$64,00",
        },
        {
          isbn: "3358e436-a0c2-410a-826a-42e2979d9792",
          titulo: "Frankenstein",
          autor: "Mary Shelley",
          editora: "xxx",
          genero: "xxx",
          quant: "10",
          preco: "R$124,00",
        },
        {
          isbn: "02ad4d16-be6b-452a-b0de-24e7cf50266c",
          titulo: "Dracula",
          autor: "Bram Stoker",
          editora: "xxx",
          genero: "xxx",
          quant: "9",
          preco: "R$234,00",
        },
        {
          isbn: "3358e436-a0c2-410a-826a-42e2979d9792",
          titulo: "Solo leveling",
          autor: "Chu-Gong",
          editora: "xxx",
          genero: "xxx",
          quant: "0",
          preco: "R$59,00",
        },
        {
          isbn: "02ad4d16-be6b-452a-b0de-24e7cf50266c",
          titulo: "The beging of the end",
          autor: "TurtleMe",
          editora: "xxx",
          genero: "xxx",
          quant: "2",
          preco: "R$64,00",
        },
        {
          isbn: "3358e436-a0c2-410a-826a-42e2979d9792",
          titulo: "Lucia",
          autor: "Haneul",
          editora: "xxx",
          genero: "xxx",
          quant: "1",
          preco: "R$64,00",
        },
        {
          isbn: "02ad4d16-be6b-452a-b0de-24e7cf50266c",
          titulo: "One piece",
          autor: "Eichiro Oda",
          editora: "xxx",
          genero: "xxx",
          quant: "3",
          preco: "R$56,00",
        },
      ],
      novo_livro: "",
      novo_autor: "",
      novo_editora: "",
      novo_genero: "",
      quantidade: "",
      preco: "",
    };
  },
  async created() {
    await this.buscarTodosOsLivros();
    await this.buscarTodosOsAutores();
    await this.buscarTodasAsEditoras();
    await this.buscarTodasAsCategorias();
  },
  methods: {
    salvar() {
      const novo_isbn = uuidv4();
      this.Livros.push({
        isbn: novo_isbn,
        titulo: this.novo_livro,
        autor: this.novo_autor,
        editora: this.novo_editora,
        genero: this.novo_genero,
        quant: this.quantidade,
        preco: this.preco,
      });
    },
    async buscarTodosOsLivros() {
      const livros = await axios.get("https://uranos-bookshop.herokuapp.com/editoras/livros");
      this.livros = livros.data;
    },
    async buscarTodosOsAutores() {
      const autores = await axios.get("https://uranos-bookshop.herokuapp.com/editoras/autores");
      this.autores = autores.data;
    },
    async buscarTodasAsEditoras() {
      const editoras = await axios.get("https://uranos-bookshop.herokuapp.com/editoras/editoras");
      this.editoras = editoras.data;
    },
    async buscarTodosOsGeneros() {
      const generos = await axios.get("https://uranos-bookshop.herokuapp.com/editoras/generos");
      this.generos = generos.data;
    },
    async salvar2() {
      await axios.post("https://uranos-bookshop.herokuapp.com/editoras/livros", this.livro);
      await this.buscarTodosOsLivros();
    },
    async excluir(livro) {
      await axios.delete(`https://uranos-bookshop.herokuapp.com/editoras/livros${livro.id}`);
      const indice = this.livros.indexOf(livro);
      this.livros.splice(indice, 1);
    },
  },
};
</script>
<template>
  <article id="livro">
    <div class="title">
      <h2>Livros</h2>
    </div>
    <div class="livro-input">
      <input placeholder="Livro" type="text" v-model="novo_livro" />
      <select class="Autor" v-model="novo_autor">
        <option value="Howard Phillips Lovecraft">
          Howard Phillips Lovecraft
        </option>
        <option value="Mary Shelley">Mary Shelley</option>
        <option value="Bram Stoker">Bram Stoker</option>
        <option value="Chu-Gong">Chu-Gong</option>
        <option value="TurtleMe">TurtleMe</option>
        <option value="Haneul">Haneul</option>
        <option value="Eichiro Oda">Eichiro Oda</option>
      </select>
      <select class="Editora" v-model="novo_editora">
        <option value="Hecatonquiro espartano livros">
          Hecatonquiro espartano livros
        </option>
        <option value="Caves from uranus">Caves from uranus</option>
        <option value="ornotorinco do bare">ornotorinco do bare</option>
        <option value="Caves from uranus">Caves from uranus</option>
        <option value="Aleph">Aleph</option>
        <option value="Suma">Suma</option>
        <option value="Intrínseca">Intrínseca</option>
      </select>
      <select class="Genero" v-model="novo_genero">
        <option value="terror">terror</option>
        <option value="Fantasia">Fantasia</option>
        <option value="Acao">Acao</option>
        <option value="Supense">Supense</option>
        <option value="Magia">Magia</option>
        <option value="Shoujo">Shoujo</option>
        <option value="Shounem">Shounem</option>
      </select>
      <input placeholder="Quantidade" type="number" v-model="quantidade" />
      <input placeholder="Preco" type="number" v-model="preco" />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="livro-form">
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>Titulo</th>
            <th>Autor</th>
            <th>Editora</th>
            <th>Genero</th>
            <th>Quantidade</th>
            <th>Preço</th>
            <th>ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="Livro in Livros" :key="Livro.id">
            <td>{{ Livro.isbn }}</td>
            <td>{{ Livro.titulo }}</td>
            <td>{{ Livro.autor }}</td>
            <td>{{ Livro.editora }}</td>
            <td>{{ Livro.genero }}</td>
            <td>{{ Livro.quant }}</td>
            <td>{{ Livro.preco }}</td>
            <td>
              <button class="excluir" @click="excluir(livro)">Apagar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </article>
</template>

<style>
#livro {
  width: 900px;
  max-height: 100%;
  min-height: 600px;
  background-color: #d9ccc1;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 30px;
}
.title {
  display: flex;
  justify-content: center;
}

.livro-input {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.livro-input input {
  width: 60%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0 10px;
}

.livro-input select {
  width: 60%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0 10px;
}

.livro-input button {
  margin-left: 1%;
  width: 20%;
  height: 40px;
  border: 1px solid #6d8c89;
  border-radius: 10px;
  background-color: #6d8c89;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.list-form {
  display: flax;
  justify-content: center;
}

table {
  width: auto;
  margin: 2% auto;
  border-collapse: collapse;
}

table tr th {
  border: 1px solid rgb(0, 0, 0);
  padding: 10px;
  font-weight: bold;
}

table tr td {
  border: 1px solid rgb(0, 0, 0);
  padding: 10px;
}

table tr:nth-child(odd) {
  background-color: #ccc;
  color: black;
}
</style>
