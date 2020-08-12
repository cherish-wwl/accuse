import axios from 'axios'
import {	getJWT } from './webViewJavascriptBridge';

const instance = axios.create({
  baseURL: process.env.NODE_ENV == "development" ? '': 'https://join.dev.fawo.cn',
  headers: {
    // 'Content-Type': "application/json;charset=utf-8",
    // 'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Bearer eyJ0eXAiOiAiSldUIiwgImFsZyI6ICJIUzI1NiJ9.eyJkZXZpY2UiOnsiaGFzaF9pZHMiOiJybHlNbGJWWSIsImRldmljZV9uYW1lIjoiXHU3OWMzXHU3OWMzXHU3Njg0XHU3MGVkXHU3MGI5IiwiZGV2aWNlX3VzaW5nX2lkIjoiNjEzODJjNDQ0N2MyZDM5ZiJ9LCJ1c2VyIjp7Imhhc2hfaWRzIjoicGFtTnpQNzh2TmF2Iiwibmlja25hbWUiOiJcdTc1MjhcdTYyMzdfTVNmaDI5SnIifSwiaXNzIjoic3Vib2Jhc2UgZGV2IiwiaWF0IjoxNTk3MDIzODc2LCJleHAiOjE1OTcxOTY2NzZ9.0cabdd4a9579c8a747fa07090b9ec73a',
    // 'User-Agent': 'subotest17/i/10200 1.1.0 STORE 1177473061C74145B943660333586EF0 (iPhone 6s;iOS;13.4.1;iPhone8,1)'
  }
})

instance.interceptors.request.use((config) => {
  console.log('getJWT',getJWT())
  return config
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