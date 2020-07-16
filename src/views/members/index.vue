<template>
    <div class="members">
        <div class="searchArea">
            <div class="inputArea">
                <div class="inputBox">
                    <p>手机号</p>
                    <el-input v-model="searchMsg.phone" placeholder="请输入内容"></el-input>
                </div>
                <div class="inputBox">
                    <p>昵称</p>
                    <el-input v-model="searchMsg.nickname" placeholder="请输入内容"></el-input>
                </div>
                <div class="inputBox">
                    <p>会员编号</p>
                    <el-input v-model="searchMsg.id" placeholder="请输入内容"></el-input>
                </div>
                <el-button class="searchBtn" type="primary" icon="el-icon-search">搜索</el-button>
            </div>
        </div>
        <div class="membersList">
            <el-table
                    :data="memberList"
                    v-loading="tableLoading"
                    size="medium"
                    :header-cell-style="{background: '#f2f5ff'}"
                    style="width: 100%">
                <el-table-column align="center" prop="user_id" label="会员编号" width="100"/>
                <el-table-column align="center" label="头像" width="100">
                    <template slot-scope="scope">
                        <el-avatar shape="square" :size="70" fit="fit" :src="scope.row.avatar" @error="errorHandler">
                            <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
                        </el-avatar>
                    </template>
                </el-table-column>
                <el-table-column align="center" prop="nick_name" label="昵称"/>
                <el-table-column align="center" prop="phone" label="手机号" width="120"/>
                <el-table-column align="center" prop="sex" label="性别"/>
                <el-table-column align="center" prop="member_card" label="会员卡" width="100"/>
                <el-table-column align="center" prop="integral" label="积分" width="100"/>
                <el-table-column align="center" prop="platform" label="平台" width="100"/>
                <el-table-column align="center" prop="add_time" label="注册时间"/>
                <el-table-column align="center" label="操作" width="150">
                    <el-button type="primary">操作</el-button>
                </el-table-column>
            </el-table>

            <div class="pagination">
                <el-pagination
                        background
                        @current-change="changeCurrent"
                        @prev-click="prevPage"
                        @next-click="nextPage"
                        layout="prev, pager, next"
                        :total="20">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                tableLoading:false,
                searchMsg:{
                    phone:'',
                    nickname:'',
                    id:''
                },
                memberList:[
                    {
                        user_id:'9527',
                        shop:'望江花园店',
                        nick_name: '一叶障目',
                        phone:'12311513255',
                        avatar:'https://wx.qlogo.cn/mmopen/vi_32/klXzOkxhSicpPHiajXmVKv4yTrgMMfDbwDPmJUT0ArD4CTwSgfAxh8wl2wNdX3PQn5BgPxVa9cI3hafgsRltBC9g/132',
                        platform:'微信',
                        sex:'男',
                        member_card:'1202',
                        integral:'120',
                        add_time:'2020-7-16'
                    }
                ]
            }
        },
        created() {
        },
        mounted() {
        },
        methods:{
            errorHandler(){
                return true
            },
            /* 分页方法 */
            changeCurrent(val){
                console.log('当前页',val)
            },
            prevPage(val){
                console.log('上一页',val)
            },
            nextPage(val){
                console.log('下一页',val)
            }
        }
    }
</script>

<style scoped lang="less">
    @import "./../../styles/pages/members/memberList";
</style>