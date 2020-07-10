import request from '../request';
import config from "../config";

export default {
    async login(params) {
        return await request.post({url: config.api.login, data: params.data, headers: params.headers})
    },
    async getAuthCode(params) {
        return await request.post({url: config.api.authcode, data: params.data, headers: params.headers})
    },
    async userLogin(params){
        return await request.post({url: config.api.userlogin, data: params.data, headers: params.headers})
    }
}