import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

Vue.filter("currency", value =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    value
  )
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
