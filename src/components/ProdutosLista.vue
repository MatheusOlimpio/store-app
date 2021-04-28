<template>
  <section class="produtos-container">
    <div v-for="produto in produtos" :key="produto.id">
      <img
        v-if="produto.fotos"
        :src="produto.fotos[0].src"
        :alt="produto.fotos[0].titulo"
      />
      <h2 class="titulo">{{ produto.nome }}</h2>
      <p class="preco">{{ produto.preco }}</p>
      <p class="descricao">{{ produto.descricao }}</p>
    </div>
    {{url}}
  </section>
</template>

<script>
import { api } from "@/services.js";

export default {
  data() {
    return {
      produtos: null,
    };
  },
  computed: {
    url() {
      let queryString = '';
      for(let key in this.$route.query) {
        queryString += `&${key}=${this.$route.query[key]}`;
      }
      return '/produto?_limit=3' + queryString;
    }
  },
  methods: {
    getProdutos() {
      api.get(this.url).then((response) => {
        this.produtos = response.data;
      });
    },
  },
  watch: {
    url() {
      this.getProdutos();
    }
  },
  created() {
    this.getProdutos();
  },
};
</script>

<style>
</style>