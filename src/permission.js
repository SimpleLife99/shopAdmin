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
            await store.dispatch('generateRoutes')  // 把路由存储到vuex渲染侧边栏
            next()
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


