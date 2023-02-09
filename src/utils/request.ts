import axios from 'axios'

const instance = axios.create({
  baseURL: '',
  timeout: 5000
})

instance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    const res = response.data
    if (res.status !== 200) {
        // error tips 5s
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res.data
    }
  },
  error => {
    console.log('err' + error) // for debug
    // error tips 5s
    return Promise.reject(error)
  }
)

export default instance
