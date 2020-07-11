<template>
    <el-breadcrumb separator="/">
        <transition-group name="breadcrumb">
            <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
                <span v-if="item.redirect === 'noRedirect'|| index == levelList.length -1 " class="no-redirect">{{ item.meta.title }}</span>
                <a v-else class="hasredirect" @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
            </el-breadcrumb-item>
        </transition-group>
    </el-breadcrumb>
</template>

<script>
    import * as pathToRegexp from 'path-to-regexp'

    export default {
        name: "breadcrumb",
        data() {
            return {
                levelList: null
            }
        },
        watch: {
            $route(route) {
                // 如果转到重定向页，请不要更新面包屑
                if (route.path.startsWith('/redirect/')) {
                    return
                }
                this.getBreadcrumb()
            }
        },
        created() {
            this.getBreadcrumb()
        },
        methods: {
            getBreadcrumb() {
                //$route.matched type:Array 包含当前路由的所有嵌套路径片段的路由记录
                let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
                // 这里修改默认不把首页填充到第一个
                // const first = matched[0]
                // if (!this.isHomePage(first)) {
                //     matched = [{path: '/home', meta: {title: '首页'}}].concat(matched)
                // }
                this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
            },
            isHomePage(route) {
                // 确定当前路由是不是（首页）
                // trim() 方法用于删除字符串的头尾空格
                // toLocaleLowerCase() 方法用于把字符串转换为小写
                const name = route && route.name
                if (!name) {
                    return false
                }
                return name.trim().toLocaleLowerCase() === 'Home'.toLocaleLowerCase()
            },
            pathCompile(path) {
                // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
                const {params} = this.$route
                var toPath = pathToRegexp.compile(path)
                return toPath(params)
            },
            handleLink(item) {
                const { redirect, path } = item
                if (redirect) {
                    if(this.$route.path == redirect){
                        /*
                        * 面包屑中的重定向路由不得与当前路由重复
                        * 否则当前路由报错：路由重复
                        * */
                        return;
                    }
                    this.$router.push({path:redirect})
                    return
                }
                this.$router.push(this.pathCompile(path))
            }
        }
    }
</script>

<style scoped lang="less">
    @import "./../styles/public/index";
    .no-redirect ,.hasredirect{
        font-size: 14px;
    }
    .no-redirect {
        color: #97a8be;
        cursor: text;
    }
    .hasredirect {
        color: #888888;
    }
</style>