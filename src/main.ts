import {createApp} from "vue";
import router from "./router";
import App from "./App.vue";
// collapse
import {ElCollapseTransition} from 'element-plus'
// fade/zoom

const app = createApp(App);
app.use(router);
app.mount("#app");
app.component(ElCollapseTransition.name, ElCollapseTransition)

