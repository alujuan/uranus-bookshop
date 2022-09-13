<script>
import EditorasApi from "@/api/editoras.js";
const editorasApi = new EditorasApi();
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      editora: {},
      editoras: [
        {
          id: "02ad4d16-be6b-452a-b0de-24e7cf50266c",
          Nome: "Hecatonquiro espartano livros",
          site: "Hecatonquiro.holtillock.com.br",
        },
        {
          id: "02ad4d16-be6b-452a-b0de-24e7cf50266c",
          Nome: "Caves from uranus",
          site: "CravesFromUranos.bing.com.br",
        },
        {
          id: "02ad4d16-be6b-452a-b0de-24e7cf50266c",
          Nome: "ornotorinco do bare",
          site: "OrnotorincodoBare.holtillock.com.br",
        },
        {
          id: "02ad4d16-be6b-452a-b0de-24e7cf50266c",
          Nome: "Caves from uranus",
          site: "CravesFromUranos.bing.com.br",
        },
      ],
      novo_nome: "",
      novo_site: "",
    };
  },
  async created() {
    this.editoras = await editorasApi.buscarTodasAsEditoras();
  },
  methods: {
    async salvar() {
      const novo_id = uuidv4();
      this.editoras.push({
        id: novo_id,
        Nome: this.novo_nome,
        site: this.novo_site,
      });
      if (this.editora.id) {
        await editorasApi.atualizarEditora(this.editora);
      } else {
        await editorasApi.adicionarEditora(this.editora);
      }
      this.editoras = await editorasApi.buscarTodasAsEditoras();
      this.editora = {};
    },
    async excluir(editora) {
      await editorasApi.excluirEditora(editora.id);
      this.editoras = await editorasApi.buscarTodasAsEditoras();
    },
    editar(editora) {
      Object.assign(this.editora, editora);
    },
  },
};
</script>
<template>
  <article id="editora">
    <div class="title">
      <h2>Editoras</h2>
    </div>
    <div class="editora-input">
      <input
        placeholder="Nome da editora:"
        type="text"
        v-model="editora.nome"
        @keyup.enter="salvar"
      />
    </div>
    <div class="editora-input">
      <input
        placeholder="Nome do site:"
        type="text"
        v-model="site.nome"
        @keyup.enter="salvar"
      />
    </div>
    <div id="salvar">
      <button @click="salvar">Salvar</button>
    </div>
    <div class="editora-form">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Site</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="editora in editoras" :key="editora.id">
            <td>{{ editora.id }}</td>
            <td>{{ editora.Nome }}</td>
            <td>{{ editora.site }}</td>
            <td>
              <button class="excluir" @click="excluir(editora)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </article>
</template>

<style>
#editora {
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

.editora-input {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.editora-input input {
  width: 60%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0 10px;
}

.editora-input button {
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

.editora-form {
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
