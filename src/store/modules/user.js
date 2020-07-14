import {removeToken, setToken} from '@/utils/auth'
import {getSessionStorage, setSessionStorage} from '@/utils'
import {resetRouter} from "@/router";
import http from '@/http/api/login'

const user = {
    //存放数据
    state: {
        userMessage: {},      // 用户信息
        token: '',             // token
        userRoles: []         // 用户角色
    },
    //提交更新数据的方法
    mutations: {
        SET_USER(state, self) {
            state.userMessage = self
        },
        SET_TOKEN(state, token) {
            state.token = token
        },
        SET_ROLES(state, roles) {
            state.userRoles = roles
        }
    },
    //异步提交 mutations
    actions: {
        login: async function ({commit}, userInfo) {
            return new Promise((resolve, reject) => {
                http.login({
                    data: userInfo
                }).then((response) => {
                    if (response) {
                        setToken(response.data.authorization)
                        setSessionStorage('userMessage', JSON.stringify(response.data))
                        commit('SET_USER', response.data)
                        commit('SET_TOKEN', response.data.authorization)
                        resolve()
                    }
                }).catch(error => {
                    reject(error)
                })
            })
        },
        getUserinfo: function ({commit}) {
            let data = getSessionStorage('userMessage')
            commit('SET_USER', JSON.parse(data))
            return data
        },
        getAuthCode: async function ({commit}) {
            return new Promise((resolve, reject) => {
                http.getAuthCode({}).then((response) => {
                    commit('SET_TOKEN', response.data)
                    setToken(response.data)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        logOut: function ({commit}) {
            commit('SET_TOKEN', '')
            commit('SET_ROLES', [])
            resetRouter()
            removeToken()
        }
    }
}
export default user
