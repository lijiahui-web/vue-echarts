import axios from 'axios'
import { Message } from 'element-ui'

const service = axios.create({
  baseURL: '',
  timeout: 30000
})
service.interceptors.request.use()
service.interceptors.response.use(
  response => {
    const res = response.data
    if(res.code !== 0){
      Message({
        message: res.message ? res.message : '网络错误，请稍后重试',
        type: 'error',
        duration: 5*1000
      })
      return Promise.reject('error')
    }else{
      return response.data
    }
  },
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5*1000
    })
  }
)
export default service