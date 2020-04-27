import Mock from 'mockjs'
import testA from './test/testA'
import testB from './test/testB'

// 设置响应延时
Mock.setup({
  timeout: 200
})

Mock.mock('a', 'get', testA())
Mock.mock('b', 'get', testB())

