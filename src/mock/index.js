import Mock from 'mockjs'
// 设置响应延时
Mock.setup({
  timeout: 200
})
let data = Mock.mock(/\/getUser/, 'get', "")
