<template>
    <div class="Navbar">
        <!-- 头像 用户名 手机号 消息提醒 汉堡菜单 路由面包屑 -->
        <div class="navbarLeft">
            <div class="hamburgerMenu" @click="toggleSideBar">
                <i :class="[isCollapse ? 'el-icon-s-unfold':'el-icon-s-fold' ]"></i>
            </div>
            <div class="breadcrumbCenter">
                <breadcrumb />
            </div>
        </div>
        <div class="navbarRight">
            <el-dropdown trigger="click">
                <div class="userMessage">
                    <img class="userLogo"
                         src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=811095050,4111374456&fm=26&gp=0.jpg"
                         alt="">
                    <p class="userName">苏琪</p>
                    <p class="userPhone">18132807673</p>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-s-shop">切换店铺</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-s-tools">修改密码</el-dropdown-item>
                    <el-dropdown-item @click.native="logout" icon="el-icon-s-promotion">安全退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapState} from 'vuex'
    import breadcrumb from '@/components/breadcrumb'
    export default {
        name: "navbar",
        data() {
            return {}
        },
        computed: {
            ...mapState({
                isCollapse: state => state.application.isCollapse,
                userMessage: state => state.user.userMessage
            }),
            ...mapGetters(['isCollapse','userMessage']),
        },
        components:{breadcrumb},
        created() {  },
        methods: {
            logout() {
                this.$store.dispatch('logOut')
                this.$router.replace({path: '/login'})
            },
            toggleSideBar() {
                this.$store.dispatch('application/toggleSideBar')
            },
        }
    }
</script>

<style scoped lang="less">
    @import "./../../styles/pages/layout/navbar";
</style>