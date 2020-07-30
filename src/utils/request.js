import axios from 'axios'

const instance = axios.create({
  // baseURL: '',
  headers: {
    'Content-Type': "application/json;charset=utf-8",
    'Authorization': 'Bearer eyJ0eXAiOiAiSldUIiwgImFsZyI6ICJIUzI1NiJ9.eyJkZXZpY2UiOnsiaGFzaF9pZHMiOiJ3TUttQUsxeCIsImRldmljZV9uYW1lIjoieWlfbWFyayIsImRldmljZV91c2luZ19pZCI6IjExNzc0NzMwNjFDNzQxNDVCOTQzNjYwMzMzNTg2RUYwIn0sInVzZXIiOnsiaGFzaF9pZHMiOiJ5SmVBODZ3YiIsIm5pY2tuYW1lIjoiXHU1ZTA1XHU2YzE0XHU1MzQxXHU4ZGIzIn0sImlzcyI6InN1Ym9iYXNlIGRldiIsImlhdCI6MTU5NjA5MTQyNCwiZXhwIjoxNTk2MjY0MjI0fQ==.e78ee09ebca97ac7fdccbd81b4e493c3',
    // 'User-Agent': 'subotest17/i/10200 1.1.0 STORE 1177473061C74145B943660333586EF0 (iPhone 6s;iOS;13.4.1;iPhone8,1)'
  }
})

instance.interceptors.request.use((config) => {
  return config
})

instance.interceptors.response.use((config) => {
  return config
})

export function post(url, data = {}) {
  console.log(data)
  return new Promise((resolve, reject) => {
    instance.post(url, data = {}).then(res => {
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
  console.log(data)
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