<template>
  <div>
    <button v-if="!form" @click="form = !form" class="btn btn-registrar">
      Registrar
    </button>
    <transition mode="out-in">
      <UsuarioForm v-if="form">
        <button
          @click.prevent="criarUsuario"
          type="submit"
          class="btn btn-form"
        >
          Criar Usuario
        </button>
      </UsuarioForm>
    </transition>
  </div>
</template>

<script>
import UsuarioForm from "@/components/UsuarioForm";
export default {
  components: {
    UsuarioForm,
  },
  data() {
    return {
      form: false,
    };
  },
  methods: {
    async criarUsuario() {
      try {
        await this.$store.dispatch("criarUsuario", this.$store.state.user);
        await this.$store.dispatch("getUsuario", this.$store.state.user.email);
        this.$router.push({ name: "usuario" });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.btn-registrar {
  background: white;
  color: #87f;
  border: 1px solid #87f;
  width: 100%;
  /* max-width: 300px; */
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}

.btn-form {
  width: 100%;
}
</style>