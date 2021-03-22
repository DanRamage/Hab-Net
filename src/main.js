import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.devtools = true;
import routes from '@/router/routes';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
