import axios from 'axios'
import {	getJWT } from './webViewJavascriptBridge';
let jwt = ""
getAuth();
async function getAuth(){
  try{
    jwt = await getJWT();
  }catch(e){
    console.log(e)
  }
}

const instance = axios.create({
  baseURL: process.env.NODE_ENV == "development" ? '': 'https://join.dev.fawo.cn',
  headers: {
    'Authorization': jwt || 'Bearer eyJ0eXAiOiAiSldUIiwgImFsZyI6ICJIUzI1NiJ9.eyJkZXZpY2UiOnsiaGFzaF9pZHMiOiJuOGJscG9iRSIsImRldmljZV9uYW1lIjoid3dsXHVkODNkXHVkZTE4XHVkODNkXHVkZTBmXHUyNjNhXHVmZTBmaVBob25lIiwiZGV2aWNlX3VzaW5nX2lkIjoiMTZGNTM2QjRDRTk2NDFBQkE3Q0VCRDE0REU5QUJFNDMifSwidXNlciI6eyJoYXNoX2lkcyI6ImVyZFg4UWpnR0VnYSIsIm5pY2tuYW1lIjoiXHU3NTI4XHU2MjM3X2FhZ1F5SFFVIn0sImlzcyI6InN1Ym9iYXNlIGRldiIsImlhdCI6MTU5NzI5MDQwMSwiZXhwIjoxNTk3NDYzMjAxfQ==.ea8a4aff8fe50a3f8f9fba18878f51ae',
  }
})

instance.interceptors.request.use((config) => {
  
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