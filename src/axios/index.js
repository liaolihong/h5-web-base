import axios from 'axios'
import vm from '../main'
import { getToken } from './auth.js'
import { transformURL } from '@/server'
// 创建axios实例
const service = axios.create({
  timeout: 100000
})
// request拦截器
service.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json;charset=UTF-8'
    config.headers.timestamp = Math.floor(new Date().getTime() / 1000)
    config.headers.common.token = getToken()
    vm.$toast.loading('加载中')
    config.url = transformURL(config.url)
    return config
  },
  error => {
    vm.$toast.clear()
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  ({ data }) => {
    vm.$toast.clear()
    return data
  },
  error => {
    vm.$toast.clear()
    return Promise.reject(error)
  }
)

export default service
