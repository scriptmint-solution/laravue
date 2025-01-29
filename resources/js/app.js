import "@js/bootstrap";

import router from "@routes";

import Testing from "@components/Testing.vue";

import { createApp } from "vue";
const app = createApp({});

app.use(router);
app.component("Testing", Testing);

app.mount("#root");
