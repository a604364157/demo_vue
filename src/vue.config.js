
const proxyPath = "localhost:8081"

module.exports = {
  proxy: {
    '/api': {//路径匹配
      target: proxyPath,//目标服务器的域名
      secure: false,//https请求
      changeOrigin: true,//是否跨域
      pathRewrite: {
        '^/api': '/api'//重写路径
      }
    }
  }
}
