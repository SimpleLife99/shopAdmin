import {constantRoutes} from '@/router'

const permission = {
    state: {
        routes: [],         // 用于渲染侧边导航栏
        addRoutes: []
    },
    mutations: {
        SET_ROUTES: (state, routes) => {
            state.addRoutes = routes
            state.routes = routes
        }
    },
    actions: {
        generateRoutes({commit}) {
            return new Promise(resolve => {
                commit('SET_ROUTES', constantRoutes)
                resolve(constantRoutes)
            })
        }
    }
}
export default permission