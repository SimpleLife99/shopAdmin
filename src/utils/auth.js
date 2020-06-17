import Cookies from 'js-cookie'

const TokenKey = 'adminToken'               // 定义 token名称

export function getToken() {                // 从cookies获取token
    return Cookies.get(TokenKey)
}

export function setToken(token) {           // 设置token
    return Cookies.set(TokenKey,token)
}

export function removeToken() {             // 删除token
    return Cookies.remove(TokenKey)
}