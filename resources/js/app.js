import "@js/bootstrap";

import router from "@routes";

import Testing from "@components/Testing.vue";

import { createApp } from "vue";
import { FontAwesomeIcon } from "@js/plugins/fontawesome";
const app = createApp({});

app.use(router);
app.component("Testing", Testing);
app.component("fa-icon", FontAwesomeIcon);

app.mount("#root");
