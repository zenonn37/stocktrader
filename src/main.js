import Vue from "vue";
import Vuikit from "vuikit";
import VuikitIcons from "@vuikit/icons";
import "@vuikit/theme";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import { routes } from "./routes";
import store from "./store/store";

Vue.use(VueRouter);
Vue.use(Vuikit);
Vue.use(VuikitIcons);
Vue.use(VueResource);
Vue.http.options.root = "https://stocktrader-4b991.firebaseio.com/";
Vue.filter("currency", value => {
  return "$" + value.toLocaleString();
});
import App from "./App.vue";

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: "history",
  routes
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
