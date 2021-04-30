<template>
  <form>
    <input
      class="input-busca"
      name="busca"
      id="busca"
      type="text"
      v-model="search"
      placeholder="Buscar produtos..."
    />
    <button
      class="btn btn-pesquisar"
      value="busca"
      type="submit"
      @click.prevent="buscarProdutos"
    >
      Buscar
    </button>
  </form>
</template>

<script>
// import { api } from '@/services.js'

export default {
  data() {
    return {
      search: null,
    };
  },
  methods: {
    buscarProdutos() {
      this.$router.push({ query: { q: this.search } });
    },
  },
};
</script>

<style scoped>
form {
  max-width: 600px;
  margin: 30px auto 60px auto;
  position: relative;
}

.input-busca {
  width: 100%;
  padding: 12px;
  border: none;
}

.input-busca:focus,
.input-busca:hover {
  outline: none;
  transform: scale(1.1);
  box-shadow: 0px 6px 12px rgb(30, 60, 90, 0.4);
}

.btn-pesquisar {
  position: absolute;
  text-indent: -150px;
  box-shadow: none;
  background: url(../assets/search.svg) no-repeat center;
  top: 0px;
  right: 0px;
}
</style>