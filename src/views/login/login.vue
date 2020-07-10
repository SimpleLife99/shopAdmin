<template>
    <div class="userLogin">
        <img class="backimg_2" src="@/assets/login/bgb2.png" alt="">
        <div class="loginContent">
            <img class="content_bgimg" src="@/assets/login/bgb3.png" alt="">
            <!-- 登录 -->
            <div class="animationContent">
                <transition name="sign" mode="out-in">
                    <!-- 登录 -->
                    <div class="login" key="login" v-if="currentStatus === 'login'">
                        <h1>欢迎登录</h1>
                        <p>请使用您本人的账号密码登录</p>
                        <div class="inputBox">
                            <img class="inputIcon" src="@/assets/login/user.png" alt="">
                            <input v-model="userName" type="text" placeholder="请输入用户名"/>
                        </div>
                        <div class="inputBox">
                            <img class="inputIcon" src="@/assets/login/password.png" alt="">
                            <input v-model="password" :type="isCanView ? 'text':'password' " placeholder="请输入密码"/>
                            <div class="passView" @click="isCanView = !isCanView">
                                <svg class="icon viewMack" v-if="isCanView" aria-hidden="true">
                                    <use xlink:href="#iconmimakejian"></use>
                                </svg>
                                <svg class="icon viewMack" v-else aria-hidden="true">
                                    <use xlink:href="#iconmimayincang"></use>
                                </svg>
                            </div>
                        </div>
                        <div class="optionBtn">
                            <el-button class="loginBtn" @click="login" type="primary">登录</el-button>
                            <el-button class="loginBtn" @click="currentStatus = 'register'" type="primary">注册</el-button>
                        </div>
                    </div>
                    <!-- 注册 -->
                    <div class="register" key="register" v-if="currentStatus === 'register'">
                        <h1>注册</h1>
                        <div class="reginput">
                            <p>企业名称：</p>
                            <el-input size="medium" v-model="regInfo.businessName" placeholder="请输入内容"></el-input>
                        </div>
                        <div class="reginput">
                            <p>注册账号：</p>
                            <el-input size="medium" v-model="regInfo.signphone" @change="verificationPhone" placeholder="请输入手机号"></el-input>
                        </div>
                        <div class="reginput">
                            <p>注册密码：</p>
                            <el-input size="medium" v-model="regInfo.signpassword" :type="isCanView ? 'text' : 'password' " placeholder="请设置您的密码"></el-input>
                            <div class="passView" @click="isCanView = !isCanView">
                                <svg class="icon viewMack" v-if="isCanView" aria-hidden="true">
                                    <use xlink:href="#iconmimakejian"></use>
                                </svg>
                                <svg class="icon viewMack" v-else aria-hidden="true">
                                    <use xlink:href="#iconmimayincang"></use>
                                </svg>
                            </div>
                        </div>
                        <div class="reginput">
                            <p>邮箱：</p>
                            <el-input size="medium" v-model="regInfo.signemail" type="email" @change="verificationEmail" placeholder="请输入您的邮箱"></el-input>
                        </div>
                        <div class="reginput">
                            <p>联系电话：</p>
                            <el-input size="medium" v-model="regInfo.telephone" placeholder="请输入你的电话号码"></el-input>
                        </div>
                        <div class="reginput">
                            <p>联系人：</p>
                            <el-input size="medium" v-model="regInfo.Contacts" placeholder="请输入联系人名称"></el-input>
                        </div>
                        <div class="reginput">
                            <p>客户行业：</p>
                            <el-select size="medium" v-model="regInfo.type" placeholder="请选择">
                                <el-option
                                        v-for="item in industry"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <el-button type="primary" @click="verificationMessage">注册</el-button>
                        <div class="agreement">
                            <p class="hasAccount" @click="currentStatus = 'login'">已有账号去登陆</p>
                            <p>点击注册即表示同意 <span>《企颖云商注册协议》</span></p>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import http from '@/http/api/login'

    export default {
        name: "login",
        data() {
            return {
                currentStatus:'login',
                isCanView:false,        // 密码是否可见 true可见 false不可见
                userName: 'suqi',
                password: '123',
                regInfo:{
                    businessName:'',
                    signphone:'',
                    signpassword:'',
                    signemail:'',
                    telephone:'',
                    Contacts:'',
                    type:''
                },
                industry:[{label:'快餐店',value:1},{label:'商铺',value:2},{label:'店铺',value:3}]
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
            //    组件挂载完成 获取auth验证
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
                    this.$store.dispatch('getAuthCode')
                    this.$store.dispatch('login', {userName: this.userName, password: this.password}).then(() => {
                        this.$router.push({name: 'Home', replace: true})
                    })
                }
            },
            verificationMessage(){
                // 注册前再次验证数据
                let verPhone = /^1[3456789]\d{9}$/
                let verEmail = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
                if (this.regInfo.businessName == ''){
                    this.$message.error('请输入企业名称');
                    return
                }
                if (this.regInfo.signphone == ''){
                    this.$message.error('请输入注册账号');
                    return
                }
                if(!verPhone.test(this.regInfo.signphone)){
                    this.$message.error('请输入正确的手机号');
                    return
                }
                if (this.regInfo.signpassword == ''){
                    this.$message.error('请输入注册密码');
                    return
                }
                if (this.regInfo.signemail == ''){
                    this.$message.error('请输入邮箱');
                    return
                }
                if(!verEmail.test(this.regInfo.signemail)){
                    this.$message.error('请输入正确的邮箱');
                }
                if (this.regInfo.telephone == ''){
                    this.$message.error('请输入联系电话');
                    return
                }
                if (this.regInfo.Contacts == ''){
                    this.$message.error('请输入联系人');
                    return
                }
                if (this.regInfo.type == ''){
                    this.$message.error('请选择客户行业类型');
                    return
                }
            },
            verificationEmail(value){
                // 验证邮箱格式
                let reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
                if(!reg.test(value)){
                    this.$message.error('请输入正确的邮箱');
                }
                console.log(value)
            },
            verificationPhone(value){
                // 验证手机号
                let verPhone = /^1[3456789]\d{9}$/
                if(!verPhone.test(value)){
                    this.$message.error('请输入正确的手机号');
                }
                console.log(value)
            },
            verification(string) {
                // 输入内容中是否含有字符串检查
                const reg = /\s/;
                return reg.test(string)
            },
            getAuthCode() {
                // 获取登录验证
                this.$store.dispatch('getAuthCode')
            },
            async adminlogin(){
                let Data = await http.userLogin({})
                console.log(Data)
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "./../../styles/pages/login.less";
</style>