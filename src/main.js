import Vue from 'vue'
import Vuex from 'vuex'
import VueSocketio from 'vue-socket'
import store from './store'
import App from './App'
import { server } from '../config/config'

const vueSocketio = Vue.use(VueSocketio, `http://localhost:${server.port}`, store)
const socket = vueSocketio.prototype.$socket
Object.defineProperty(Vue.prototype, '$socket', { value: socket })

Vue.config.productionTip = false
Vue.prototype.$event = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store,
})

// Socket main logic
socket.on('connect', () => {
  store.dispatch('wsActive', true)
})
socket.on('disconnect', () => {
  store.dispatch('wsActive', false)
})
socket.on('WS:UPDATE', (data) => {
  if (!data) return
  store.dispatch('wsUpdate', data)
})
