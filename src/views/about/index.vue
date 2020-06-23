<template>
    <div class="home">
        <h2>This is an About page</h2>
        <el-button type="primary" @click="logout()">退出登录</el-button>
        <el-button type="primary" @click="pageJump()">首页</el-button>
        <hello ref="data" :msg="message" @setNum="getNum"></hello>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'
    import { removeToken } from "@/utils/auth"
    import hello from '@/components/HelloWorld'

    export default {
        name: 'Home',
        data() {
            return {
                message:'hello'
            }
        },
        computed: {
            ...mapState({
                userMessage: state => state.user.userMessage
            }),
        },
        created() {

        },
        mounted() {

        },
        components: { hello },
        methods: {
            ...mapMutations(['SET_USER']),
            logout() {
                this.SET_USER({})
                removeToken()
                this.$router.replace({path: '/login'})
            },
            pageJump(){
                this.$router.push({path:'/'})
            },
            getNum(){
                console.log(this.$refs["data"])
            }
        }
    }
</script>
<style lang="less" scoped>

</style>
