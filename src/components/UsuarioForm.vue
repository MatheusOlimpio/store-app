<template>
  <div>
    <form>
      <label for="nome">Nome</label>
      <input type="text" name="nome" id="nome" v-model="nome" />

      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="email" />

      <label for="senha">Senha</label>
      <input type="password" name="senha" id="senha" v-model="senha" />

      <label for="cep">Cep</label>
      <input
        type="text"
        name="cep"
        id="cep"
        v-model="cep"
        maxlength="8"
        @keyup="searchCEP"
      />

      <label for="rua">Rua</label>
      <input
        type="text"
        name="rua"
        id="rua"
        v-model="rua"
        :disabled="loadingCEP"
        :placeholder="messageLoading"
      />

      <label for="numero">Numero</label>
      <input type="text" name="numero" id="numero" v-model="numero" />

      <label for="bairro">Bairro</label>
      <input
        type="text"
        name="bairro"
        id="bairro"
        v-model="bairro"
        :disabled="loadingCEP"
        :placeholder="messageLoading"
      />

      <label for="cidade">Cidade</label>
      <input
        type="text"
        name="cidade"
        id="cidade"
        v-model="cidade"
        :disabled="loadingCEP"
        :placeholder="messageLoading"
      />

      <label for="estado">Estado</label>
      <input
        type="text"
        name="estado"
        id="estado"
        v-model="estado"
        :disabled="loadingCEP"
        :placeholder="messageLoading"
      />
      <div class="button">
        <slot></slot>
      </div>
    </form>
  </div>
</template>

<script>
import { createVuexModifiers } from "@/helpers.js";
import { getCep } from "@/services.js";

export default {
  name: "usuarioForm",
  data() {
    return {
      loadingCEP: true,
      messageLoading: "",
    };
  },
  methods: {
    searchCEP() {
      this.messageLoading = "Carregando..";
      const cep = this.cep.replace(/\D/g, "");
      if (cep.length === 8) {
        this.loadingCEP = true;
        getCep(cep).then((response) => {
          this.messageLoading = "";
          this.loadingCEP = false;
          this.rua = response.data.logradouro;
          this.bairro = response.data.bairro;
          this.cidade = response.data.localidade;
          this.estado = response.data.uf;
        });
      }
    },
  },
  computed: {
    cep() {
      return this.$store.state.user.cep;
    },
    ...createVuexModifiers({
      mutation: "UPDATE_USUARIO",
      base: "user",
      fields: [
        "id",
        "nome",
        "email",
        "senha",
        "cep",
        "rua",
        "numero",
        "bairro",
        "cidade",
        "estado",
      ],
    }),
  },
};
</script>

<style scoped>
form {
  display: grid;
  grid-template-columns: 80px 1fr;
  margin-top: 50px;
  align-items: center;
}

.button {
  grid-column: 2;
}
</style>