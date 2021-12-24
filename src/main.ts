import {createApp} from "vue";
import router from "./router";
// @ts-ignore
import store from "./store/store.js";
import App from "./App.vue";
// collapse
import {ElCollapseTransition} from "element-plus";
// fade/zoom
import 'element-plus/dist/index.css';
import 'animate.css';

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
app.component(ElCollapseTransition.name, ElCollapseTransition);

