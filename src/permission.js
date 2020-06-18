import router from './router'
import store from './store'
import {getToken} from './utils/auth'

const whiteList = ['/login']        // 不许要登录权限的路由白名单
router.beforeEach(async (to, from, next) => {
    //vue 路由页设置页面title
    if (to.meta.title) {
        document.title = to.meta.title
    } else {
        document.title = 'shop-admin'
    }

    let token = getToken()
    if (token) {
        // 如果已经登录了 路由重定向到首页
        if (to.path === '/login') {
            next({path: '/', replace: true})
        } else {
            const hasRoles = store.getters.userRoles && store.getters.userRoles.length > 0
            if (hasRoles) {
                next()
            } else {
                try {
                    const roles = await store.dispatch('getUserinfo')
                    const accessRoutes = await store.dispatch('generateRoutes', roles)
                    // 动态添加可访问路由
                    router.addRoutes(accessRoutes)
                    // next({replace: true})
                    next({ ...to,replace: true })
                } catch (e) {
                    next({path: '/login', replace: true})
                }
            }
        }
    } else {
        // 用户未登录 路由重定向到 登录页
        if (whiteList.indexOf(to.path) !== -1) {
            // 预进入路由在白名单中 直接进入
            next()
        } else {
            // 预进入路由不在白名单 且无访问权限的 重定向到登录页
            next({path: '/login', replace: true})
        }
    }
})


