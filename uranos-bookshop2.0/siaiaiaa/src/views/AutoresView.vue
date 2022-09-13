<script>
import AutoresApi from "@/api/autores.js";
const autoresApi = new AutoresApi();
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      autor: {},
      autores: [
        {
          id: "02ad4d16-be6b-452a-b0de-24e7cf50266c",
          Nome: "Machado de Assis",
        },
        {
          id: "02ad4d16-be6b-452a-b0de-24e7cf50266c",
          Nome: "Monteiro Lobato",
        },
        {
          id: "02ad4d16-be6b-452a-b0de-24e7cf50266c",
          Nome: "Thiago Nigro",
        },
        {
          id: "02ad4d16-be6b-452a-b0de-24e7cf50266c",
          Nome: "Rupi Kaur",
        },
        {
          id: "02ad4d16-be6b-452a-b0de-24e7cf50266c",
          Nome: "Anna Todd",
        },
        {
          id: "02ad4d16-be6b-452a-b0de-24e7cf50266c",
          Nome: "Paulo Coelho",
        },
        {
          id: "02ad4d16-be6b-452a-b0de-24e7cf50266c",
          Nome: "Ziraldo Alves Pinto",
        },
      ],
      novo_nome: "",
    };
  },
  async created() {
    this.autores = await autoresApi.buscarTodosOsAutores();
  },
  methods: {
    async salvar() {
      const novo_id = uuidv4();
      this.autores.push({
        id: novo_id,
        Nome: this.novo_nome,
      });
      if (this.autor.id) {
        await autoresApi.atualizarAutor(this.autor);
      } else {
        await autoresApi.adicionarAutor(this.autor);
      }
      this.autores = await autoresApi.buscarTodosOsAutores();
      this.autor = {};
    },
    async excluir(autor) {
      await autoresApi.excluirAutor(autor.id);
      this.autores = await autoresApi.buscarTodosOsAutores();
    },
    editar(autor) {
      Object.assign(this.autor, autor);
    },
  },
};
</script>
<template>
  <article id="autor">
    <div class="title">
      <h2>Autores</h2>
    </div>
    <div class="autor-input">
      <input type="text" v-model="autor.nome" @keyup.enter="salvar" />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="autor-form">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Autor</th>
            <th>ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="autor in autores" :key="autor.id">
            <td>{{ autor.id }}</td>
            <td>{{ autor.Nome }}</td>
            <td>
              <button class="excluir" @click="excluir(autor)">excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </article>
</template>

<style>
#autor {
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

.autor-input {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.autor-input input {
  width: 60%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0 10px;
}

.autor-input button {
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

.autor-form {
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
