import {setToken, removeToken} from '@/utils/auth'
import {resetRouter} from "@/router";

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
        // eslint-disable-next-line no-unused-vars
        login: function ({commit}, userInfo) {
            console.log('用户信息', userInfo)
            let token = 'abcdefg'
            commit('SET_TOKEN', token)
            commit('SET_USER', userInfo)
            setToken(token)
        },
        getUserinfo: function ({commit}) {
            let roles = ['admin']
            commit('SET_ROLES', roles)
            return roles
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
