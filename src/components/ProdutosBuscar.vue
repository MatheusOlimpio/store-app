<template>
  <form>
    <input name="busca" id="busca" type="text" v-model="search" />
    <button class="btn" value="busca" type="submit" @click.prevent="buscarProdutos">Buscar</button>
  </form>

</template>

<script>
// import { api } from '@/services.js'

export default {
  data() {
    return {
      search: null
    }
  },
  methods: {
    buscarProdutos() {
      this.$router.push({query: {q: this.search}});     
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  align-items: center;
}
</style>