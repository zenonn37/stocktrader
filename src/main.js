import Vue from "vue";
import Vuikit from "vuikit";
import VuikitIcons from "@vuikit/icons";
import "@vuikit/theme";
import VueRouter from "vue-router";
import { routes } from "./routes";

Vue.use(VueRouter);
Vue.use(Vuikit);
Vue.use(VuikitIcons);
import App from "./App.vue";

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: "history",
  routes
});
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
