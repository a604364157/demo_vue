import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import i18n from './i18n/i18n'
import http from './http'

Vue.config.productionTip = false
// 全局使用el-ui
Vue.use(elementUI)
// 非生产环境下才使用mock,因此只能require
if (process.env.NODE_ENV !== 'production') require('./mock')
// 引入axios
Vue.prototype.http = http

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
