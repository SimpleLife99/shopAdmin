const TokenKey = 'authorization'             // 定义 token名称

export function getToken() {                 // 从cookies获取token
    return sessionStorage.getItem(TokenKey)
}

export function setToken(token) {           // 设置token
    return sessionStorage.setItem(TokenKey,token)
}

export function removeToken() {             // 删除token
    return sessionStorage.removeItem(TokenKey)
}