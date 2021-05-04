<template>
  <div class="paginas">
    <ul>
      <li class="pagina" v-for="pagina in paginas" :key="pagina">
        <router-link :to="{ query: query(pagina) }">{{ pagina }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "produtosPaginar",
  props: {
    total: {
      type: Number,
      default: 1,
    },
    produtosPorPagina: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    query(pagina) {
      this.paginaAtual = pagina;
      return {
        ...this.$route.query,
        _page: pagina,
      };
    },
  },
  computed: {
    paginas() {
      const current = this.$route.query._page || 1;
      const range = 9;
      const offset = Math.ceil(range / 2);
      const total = this.totalPaginas;
      const pagesArray = [];

      for (let i = 1; i <= total; i++) {
        pagesArray.push(i);
      }
      pagesArray.splice(0, current - offset);
      pagesArray.splice(range, total);
      return pagesArray;
    },
    totalPaginas() {
      const total = this.total / this.produtosPorPagina;
      return total !== Infinity ? Math.ceil(total) : 0;
    },
  },
};
</script>

<style scoped>
.paginas {
  margin: 0 auto;
  width: 100%;
  grid-column: 1 / -1;
}

.pagina {
  display: inline-block;
  margin: 30px 10px;
}

.pagina a {
  box-shadow: 0 4px 8px rgb(30, 60, 90, 0.2);
  padding: 10px 15px;
  border-radius: 4px;
}

.ativo {
  background: #87f;
  color: white;
}
</style>