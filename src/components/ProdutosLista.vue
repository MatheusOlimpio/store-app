<template>
  <section class="produtos-container">
    <div v-if="produtos.length > 0" class="produtos">
      <div v-for="(produto, index) in produtos" :key="index" class="produto">
        <router-link to="/">
          <img
            v-if="produto.fotos"
            :src="produto.fotos[0].src"
            :alt="produto.fotos[0].titulo"
          />
          <p class="preco">{{ produto.preco }}</p>
          <h2 class="titulo">{{ produto.nome }}</h2>
          <p class="descricao">{{ produto.descricao }}</p>
        </router-link>
      </div>
      <ProdutosPaginar
        :total="produtosTotal"
        :produtosPorPagina="produtosPorPagina"
      />
    </div>
    <div v-else-if="produtos.length === 0" class="sem-resultados">
      <h1>Nenhum produto encontrado</h1>
    </div>
  </section>
</template>

<script>
import ProdutosPaginar from "@/components/ProdutosPaginar.vue";
import { api } from "@/services.js";
import { serialize } from "@/helpers.js";
export default {
  name: "produtosLista",
  data() {
    return {
      produtos: [],
      produtosPorPagina: 3,
      produtosTotal: 0,
    };
  },
  components: {
    ProdutosPaginar,
  },
  computed: {
    url() {
      let query = serialize(this.$route.query);
      return `/produto?_limit=${this.produtosPorPagina}${query}`;
    },
  },
  methods: {
    getProdutos() {
      api.get(this.url).then((response) => {
        this.produtosTotal = parseInt(response.headers["x-total-count"]);
        this.produtos = response.data;
      });
    },
  },
  watch: {
    url() {
      this.getProdutos();
    },
  },
  created() {
    this.getProdutos();
  },
};
</script>

<style scoped>
.produtos-container {
  max-width: 1000px;
  margin: 0 auto;
}
.produtos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin: 30px;
}

.produto {
  box-shadow: 0 4px 8px rgb(30, 60, 90, 0.1);
  padding: 20px;
  background: white;
  border-radius: 10px;
  transition: all 0.3s;
}

.produto:hover {
  box-shadow: 0 6px 12px rgb(30, 60, 90, 0.2);
  transform: scale(1.1);
  position: relative;
  z-index: 1;
}

.produto img {
  border-radius: 4px;
  margin-bottom: 20px;
}

.titulo {
  margin-bottom: 10px;
}

.preco {
  color: #e80;
  font-weight: bold;
}

.sem-resultados {
  text-align: center;
}
</style>