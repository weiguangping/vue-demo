import Vue from "vue";
import App from "./App.vue";
// import Sticky from 'vue-sticky-directive'
import VueSticky from "vue-sticky"; // Es6 module
// Vue.use(Sticky)
// Vue.directive("Sticky", Sticky);
Vue.directive("sticky", VueSticky);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
