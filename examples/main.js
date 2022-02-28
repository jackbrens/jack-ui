import Vue from 'vue'
import App from './App.vue'
import router from './router';
import '@fortawesome/fontawesome-free/css/all.css';
import JackUI from '../packages';

Vue.use(JackUI)

// import jackUI from 'jack-ui';
// import 'jack-ui/dist/jack-ui.css'
// Vue.use(jackUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
