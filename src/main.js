import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);
Vue.config.productionTip = false

/* Esto es un PIPE GLOBAL para el tipo de moneda Argentina 
   más info acá https://es.vuejs.org/v2/guide/filters.html
   debe declararse antes de la instancia new Vue
*/
Vue.filter('currency', function(value){
  let val = (value/1).toFixed(2).replace('.', ',')
  return "$ " + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
