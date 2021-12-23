import axios from 'axios';

const requests = axios.create({
    baseURL: import.meta.env.BASE_URL,  //设置开发端口地址
    timeout: 20000,
})

//拦截器
requests.interceptors.request.use((config) => {
    config = config || {}
    config.headers!['']
    return config
})

export default requests