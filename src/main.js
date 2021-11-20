import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
// import { DatetimePicker } from "mint-ui";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";


// Vue.component(DatetimePicker.name, DatetimePicker);
Vue.use(MintUI);
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
