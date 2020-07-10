import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/*
* Layout
* 引入需要的网页布局
* */
import Layout from '@/layout'
/* 导入模块路由 */
import orderRouter from "./modules/order";
import marketing from "./modules/marketing";
/*
* constantRoutes
*   代表那些不需要动态判断权限的路由，如登录页、404、等通用页面。
* asyncRoutes
*   代表那些需求动态判断权限并通过 addRoutes 动态添加的页面。
* */
export const constantRoutes = [
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [
            {
                path: 'home',
                component: () => import('@/views/home/index'),
                name: 'Home',
                meta: {title: '首页', icon: 'shouye'}
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        meta: {title: '登录'},
        hidden: true,
        component: () => import('@/views/login/login')
    },
    marketing
];
export const asyncRoutes = [
    {
        path: '/about',
        component: Layout,
        redirect: '/about/index',
        name: 'About',
        meta: {title: '关于我们', roles: ['admin'], icon: 'paihangbang'},
        children: [
            {
                path: 'index',
                name: 'About-index',
                component: () => import('@/views/about/index'),
                meta: {
                    title: '关于我们 主页',
                }
            },
            {
                path: 'introduction',
                name: 'Introduction',
                component: () => import('@/views/about/introduction'),
                meta: {
                    title: '公司简介'
                }
            }
        ]
    },
    orderRouter,
]

const createRoute = () => new VueRouter({
    mode: 'hash',
    base: 'app/',
    // base: process.env.BASE_URL,
    routes: constantRoutes,
})
const router = createRoute()

/*
* 当用户退出登录时，清除当前路由。
* */
export function resetRouter() {
    const newRouter = createRoute()
    router.matcher = newRouter.matcher
}

export default router
