import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import css from './stylesheets/main.css'

Vue.config.productionTip = false

new Vue({
  router,
  css,
  render: h => h(App),
}).$mount('#app')
