import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Produto from "../views/Produto.vue";
import Login from "../views/Login.vue";
import Usuario from "../views/Usuario/Usuario.vue";
import UsuarioProdutos from "../views/Usuario/UsuarioProdutos.vue";
import UsuarioEditar from "../views/Usuario/UsuarioEditar.vue";
import UsuarioCompras from "../views/Usuario/UsuarioCompras.vue";
import UsuarioVendas from "../views/Usuario/UsuarioVendas.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/produto/:id",
    name: "produto",
    component: Produto,
    props: true,
  },
  {
    path: "/usuario",
    component: Usuario,
    children: [
      {
        path: "",
        name: "usuario",
        component: UsuarioProdutos,
      },
      {
        path: "editar",
        name: "usuario-editar",
        component: UsuarioEditar,
      },
      {
        path: "compras",
        name: "compras",
        component: UsuarioCompras,
      },
      {
        path: "vendas",
        name: "vendas",
        component: UsuarioVendas,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
});

export default router;
