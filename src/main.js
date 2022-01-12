import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as io from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'

Vue.use(VueSocketIO, io('http://localhost:3000'))

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
