import Vue from 'vue'
import App from './App.vue'
import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import splitPane from 'vue-splitpane'
import VueSocketIO from 'vue-socket.io'

import bootstrap from 'bootstrap'

Vue.component('split-pane', splitPane);
Vue.use(new VueSocketIO({
    debug: true,
    connection: 'http://localhost:5000'
}))

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
