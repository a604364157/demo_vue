import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'

// 全局使用ajax请求工具,引用了VueAxios定义了($http=axios)
Vue.use(VueAxios, axios)

// 创建axios实例
let http = axios.create({
  timeout: 600000, // 请求超时时间
})

// 请求拦截器
http.interceptors.request.use(config => {
  // 请求前需要做什么
  // console.log('req:' + JSON.stringify(config))
  if (!config.data) {
    config.data = {}
  }
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
http.interceptors.response.use(config => {
  // 接收响应先做什么再反数据给调用
  // console.log('res:' + JSON.stringify(config))
  return config
}, error => {
  return Promise.reject(error)
})

export default http
