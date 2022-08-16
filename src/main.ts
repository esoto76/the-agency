import { createApp } from "vue";
import { createPinia } from "pinia";
import { createHead } from "@vueuse/head";

import App from "./App.vue";
import router from "./router";

import "./styles/index.css";

const head = createHead();

const app = createApp(App);

app.use(head);

app.use(createPinia());
app.use(router);

app.mount("#app");
