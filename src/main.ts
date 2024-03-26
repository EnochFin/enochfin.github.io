import { createApp } from "vue";
import { createPinia } from "pinia";
import VueKonva from "vue-konva";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faLinkedin,
  faGithub,
  faDiscord,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMap,
  faCube,
  faCamera,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

library.add(faLinkedin);
library.add(faGithub);
library.add(faDiscord);
library.add(faEnvelope);
library.add(faMap);
library.add(faCamera);
library.add(faCube);
library.add(faInstagram);
library.add(faGamepad);

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);

app.use(createPinia());
app.use(router);
app.use(VueKonva);

app.mount("#app");
