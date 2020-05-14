import Vue from 'vue'
import App from './App.vue'
import './assets/styles.scss'
import 'swiper/css/swiper.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
