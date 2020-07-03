<template>
    <div v-if="!item.hidden">
        <div class="only-one-child"
             v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren)">
            <router-link :to="resolvePath(onlyOneChild.path)">
                <el-menu-item :index="resolvePath(onlyOneChild.path)">
                    <icon v-if="onlyOneChild.meta.icon" :icon="onlyOneChild.meta.icon"></icon>
                    <span class="sidebar-title">{{onlyOneChild.meta.title||item.meta.title}}</span>
                </el-menu-item>
            </router-link>
        </div>

        <el-submenu class="siderbar-item" v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
            <template slot="title">
                <icon v-if="item.meta && item.meta.icon" :icon="item.meta.icon"></icon>
                <span class="sidebar-title">{{item.meta.title}}</span>
            </template>
            <sidebarItem
                    v-for="child in item.children"
                    :key="child.path"
                    :item="child"
                    :base-path="resolvePath(child.path)"
            />
        </el-submenu>
    </div>
</template>

<script>
    import path from 'path'
    import icon from './icon'

    export default {
        name: "sidebarItem",
        props: {
            // route object
            item: {
                type: Object,
                required: true
            },
            isNest: {
                type: Boolean,
                default: false
            },
            basePath: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                onlyOneChild: null
            }
        },
        computed:{  },
        components:{icon},
        created(){  },
        methods: {
            hasOneShowingChild(children = [], parent) {
                const showingChildren = children.filter(item => {
                    if (item.hidden) {
                        return false
                    } else {
                        // 临时设置（只有一个显示子项时使用）
                        this.onlyOneChild = item
                        return true
                    }
                })

                // 当只有一个子路由器时，默认显示子路由器
                if (showingChildren.length === 1) {
                    return true
                }

                // 如果没有要显示的子路由器，则显示父路由器
                if (showingChildren.length === 0) {
                    this.onlyOneChild = {...parent, path: '', noShowingChildren: true}
                    return true
                }

                return false
            },
            resolvePath(routePath) {
                if (this.isExternal(routePath)) {
                    return routePath
                }
                if (this.isExternal(this.basePath)) {
                    return this.basePath
                }
                return path.resolve(this.basePath, routePath)
            },
            isExternal(path) {
                //判断字符串是否是https?:|mailto:|tal: 开头的
                return /^(https?:|mailto:|tel:)/.test(path)
            }
        }
    }
</script>

<style scoped lang="less">
    @import "./../../../styles/pages/layout/index.less";
    .is-active{
        /*  菜单激活时的背景颜色  */
        background-color: #2c405a !important;
    }
</style>