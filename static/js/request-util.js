//es6异步promise网络请求
import axios from 'axios'
import {baseAjaxUrl} from './config/global-config.js'
axios.defaults.timeout = 20000; //设置请求响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';//配置请求头
axios.defaults.withCredentials=true;

  // axios.defaults.baseURL = 'http://test10.epailive.com';
  //  axios.defaults.baseURL = 'http://kf.epailive.com:8880';
   axios.defaults.baseURL =baseAjaxUrl;
//响应拦截器
// axios.interceptors.response.use((res) => {
//   if (!res.data.success) {
//     // _.toast(res.data.msg);
//     return Promise.reject(res);
//   }
//   return res;
// }, (error) => {
//   return Promise.reject(error);
// });

//返回一个Promise(发送post请求)
export function fetchPost(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      })
  })
}
//返回一个Promise(发送get请求)
export function fetchGet(url,params) {
  return new Promise((resolve, reject) => {
    axios.get(url,{
      params:params
    }).then(response => {
      resolve(response);
    }).catch(error => {
      reject(error);
    })
  })
}
