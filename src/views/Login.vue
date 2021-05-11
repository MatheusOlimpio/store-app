<template>
  <div class="login">
    <h1>Login</h1>
    <form>
      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        v-model="login.email"
        required="true"
      />
      <label for="senha">Senha</label>
      <input
        type="password"
        name="senha"
        id="senha"
        v-model="login.senha"
        required
      />
      <p class="perdeu">
        <a href="/" target="_blank">Esqueceu sua senha ?</a>
      </p>
      <button @click.prevent="entrar" type="submit" class="btn">Entrar</button>
    </form>
    <RegistrarUsuario />
  </div>
</template>

<script>
import RegistrarUsuario from "@/components/RegistrarUsuario.vue";
export default {
  components: {
    RegistrarUsuario,
  },
  data() {
    return {
      login: {
        email: "",
        senha: "",
      },
    };
  },
  methods: {
    entrar() {
      if (this.validarForm()) {
        this.$store.dispatch("getUsuario", this.login.email);
        this.$router.push({ name: "usuario" });
      }
    },
    validarForm() {
      if (this.login.email.length > 0 && this.login.senha.length > 0) {
        return true;
      }

      return false;
    },
  },
};
</script>

<style scoped>
.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}
h1 {
  margin-top: 40px;
  text-align: center;
  font-size: 2rem;
  color: #87f;
}
form {
  display: grid;
}

.btn {
  width: 100%;

  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}

.perdeu {
  text-align: right;
}

.perdeu a {
  font-size: 0.9rem;
  color: #87f;
}

.perdeu a:hover {
  text-decoration: underline;
}
</style>