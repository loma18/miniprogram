import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from '~/constants/router';
import axios from 'axios';

Vue.prototype.$axios = axios;

Vue.use(ElementUI);
Vue.use(VueRouter);

const router = new VueRouter({ mode: 'history', base: '/', routes });
new Vue({
  el: '#miniprogram',
  router,
  render: h => h(App)
});
