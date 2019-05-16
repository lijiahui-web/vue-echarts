import request from '@/utils/request'
import axios from 'axios'
import { joinStr } from '@/utils/index'

export function ajax(op){
  let method = '';
  let url = '';
  axios.defaults.withCredentials = true;
  if (op.method) {
    method = op.method
  } else {
    method = 'post'
  }
  if (method == 'get') {
    url = op.url + '?' + joinStr(op.data);
  } else {
    url = op.url;
  }
  if (method == 'delete')
    url = op.url + '?' + joinStr(op.data);
  return request({
    url: url,
    method: method,
    data: op.data
  })
}