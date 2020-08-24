import axios from 'axios'
import {getJWT, getUA } from './webViewJavascriptBridge';


console.log('window',window)
const instance = axios.create({
  baseURL: process.env.NODE_ENV == "development" ? '': window.location.origin,
})

instance.interceptors.request.use(async (config) => {
  var Authorization = sessionStorage.getItem('Authorization')
  var UA = sessionStorage.getItem('UA')
  if(!Authorization || !UA){
    try{
      const auth = await getJWT();
      const ua = await getUA();
      config.headers['Authorization'] = auth;
      config.headers['User-Agent']= ua;
  
    }catch(e){
      console.log(e)
    }
    console.log(config)
    return config
  
  }else{
    config.headers['Authorization'] = Authorization;
    config.headers['User-Agent']= UA;
    console.log(config)
    return config
  }
})

instance.interceptors.response.use((config) => {
  return config
})

export function post(url, data = {}) {
  // console.log(data)
  return new Promise((resolve, reject) => {
    instance.post(url, data).then(res => {
      if (res.data) {
        resolve(res.data)
      }
    }, err => {
      throw err
    }).catch(e => {
      reject(e)
    })
  })
}

const spliceApiUrl = (apiUrl, params = {}) => {
  let url = '?';
  for (const key in params) {
    if (params[key]) {
      url += key + '=' + params[key] + '&';
    }
  }
  url = url.substring(0, url.length - 1);
  return apiUrl + url;
};

export function get(url, data = {}) {
  // console.log(data)
  return new Promise((resolve, reject) => {
    instance.get(spliceApiUrl(url, data)).then(res => {
      if (res.data) {
        resolve(res.data);
      }
    }, err => {
      throw err
    }).catch(e => {
      reject(e)
    })
  })
}