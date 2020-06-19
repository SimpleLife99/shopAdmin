<template>
    <div class="userLogin">
        <div class="login">
            <h1>登录</h1>
            <div class="inputBox">
                <svg class="icon loginicon" aria-hidden="true">
                    <use xlink:href="#iconpassword"></use>
                </svg>
                <el-input class="loginInput" size="large" v-model="userName" placeholder="请输入用户名"></el-input>
            </div>
            <div class="inputBox">
                <svg class="icon loginicon" aria-hidden="true">
                    <use xlink:href="#iconyonghu1"></use>
                </svg>
                <el-input class="loginInput" size="large" placeholder="请输入密码" show-password
                          v-model="password"></el-input>
            </div>
            <el-button class="loginBtn" @click="userLogin" type="primary">登录</el-button>
        </div>
    </div>
</template>

<script>
    import http from '@/http/api/login'
    export default {
        name: "login",
        data() {
            return {
                userName: 'admin',
                password: '111',
            }
        },
        components: {},
        beforeCreate() {
            //    组件文件创建之前
        },
        created() {
            //    组件文件创建
        },
        beforeMount() {
            //    组件挂载之前
        },
        mounted() {
            //    组件挂载完成
        },
        beforeDestroy() {
            //    解除绑定，销毁组件前
        },
        destroyed() {
            //    组件销毁完毕
        },
        methods: {
            login() {
                if (this.userName === '') {
                    this.$message.error('请输入用户名！')
                } else if (this.password === '') {
                    this.$message.error('请输入密码！')
                } else if (this.verification(this.password)) {
                    this.$message.error('密码中不能含有空格！')
                } else {
                    this.$message({
                        message: '登录成功',
                        type: 'success',
                        duration: 2000
                    });
                    this.$store.dispatch('login',{userName:this.userName,password:this.password})
                    this.$router.push({name: 'Home',replace: true})
                }
            },
            verification(string) {
                // 输入内容中是否含有字符串检查
                const reg = /\s/;
                return reg.test(string)
            },
            async userLogin(){
                let Data = await http.login({})
                console.log(Data)
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "./../../styles/pages/login.less";
</style>