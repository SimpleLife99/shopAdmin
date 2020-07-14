import config from "./config";
import axios from "axios";
import {Message} from 'element-ui'
import {getToken} from '@/utils/auth'

/*
* 当请求头为 “ application/x-www-form-urlencoded ” 时
* 修改 data 传值类型
* import Qs from "qs";
* data = qs.stringify(params.data)
* */

export class Request {
    constructor() {
        /**
         * 配置默认基地址
         * baseURL将自动加在url前面
         * */
        axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? config.productUrl : config.developUrl
        axios.defaults.timeout = 10000
        this.RequestInterceptors()  // 添加请求拦截器 请求或响应被 then 或 catch 处理前拦截它们
        this.ResponseInterceptor()  // 添加响应拦截器
    }

    async post(params) {
        try {
            return await axios.post(params.url || {}, params.data || {}, {
                headers: params.headers
            })
        } catch (error) {
            Message({
                message: error.message,
                type: 'error',
                duration: 2000
            })
        }
    }

    async get(params) {
        try {
            return await axios.get(params.url, {
                data: params.data || {},
                headers: params.headers || {}
            })
        } catch (error) {
            Message({
                message: error.message,
                type: 'error',
                duration: 2000
            })
        }
    }

    // 添加请求拦截器
    async RequestInterceptors() {
        axios.interceptors.request.use(config => {
            /*
            * 在发送请求之前做些什么
            * 统一设置请求头
            * application/json
            * application/x-www-form-urlencoded
            */
            config.headers['Content-Type'] = 'application/json';
            config.authorization = getToken
            return config;
        }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });
    }

    //添加响应拦截器
    async ResponseInterceptor() {
        axios.interceptors.response.use(response => {
            // 对响应数据做点什么
            if (response.data.code == 0){
                return response.data
            }else{
                Message({
                    message: response.data.msg,
                    type: 'error',
                    duration: 2000
                })
            }
            /*
            * -1 通用错误
            * 40001 未登录 跳转登录页，清除token
            * */
        }, function (error) {
            // 对响应错误做点什么
            return Promise.reject(error);
        });
    }
}

export default new Request()