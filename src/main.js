import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import PaginaCarregando from "./components/PaginaCarregando.vue";

createApp(App)
  .use(store)
  .use(router)
  .component("PaginaCarregando", PaginaCarregando)
  .mount("#app");
