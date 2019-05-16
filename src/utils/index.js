// json数据拼接成字符串
export function joinStr(obj) {
  let str = '';
  for (let key in obj) {
      str += key + '=' + obj[key] + '&';
  }
  return str;
}