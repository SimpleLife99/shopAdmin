<template>
    <div class="refundOrder">
        <div class="searchArea">
            <div class="inputArea">
                <div class="inputBox">
                    <p>外部订单号</p>
                    <el-input v-model="searchMsg.orderid" placeholder="请输入内容"></el-input>
                </div>
                <div class="inputBox">
                    <p>下单时间</p>
                    <el-date-picker
                            v-model="searchMsg.time.start"
                            type="datetime"
                            placeholder="选择开始时间">
                    </el-date-picker>
                    <span class="centerValue">至</span>
                    <el-date-picker
                            v-model="searchMsg.time.end"
                            type="datetime"
                            placeholder="选择结束时间">
                    </el-date-picker>
                </div>
            </div>
            <div class="operationArea">
                <el-button type="primary">搜索</el-button>
            </div>
        </div>
        <div class="orderList">
            <el-table
                    :data="orderList"
                    size="medium"
                    :header-cell-style="{background: '#f2f5ff'}"
                    style="width: 100%">
                <el-table-column prop="id"        label="序号"      align="center" width="50"/>
                <el-table-column prop="order_id"  label="商品订单"   align="center" width="80" />
                <el-table-column prop="order_sn"  label="外部订单号" align="center" />
                <el-table-column prop="commodity" label="商品"      align="center"/>
                <el-table-column prop="reason"    label="退货原因"   align="center"/>
                <el-table-column prop="addtime"   label="申请时间"   align="center"/>
                <el-table-column prop="mobile"    label="手机号"     align="center" width="120"/>
                <el-table-column prop="username"  label="姓名"      align="center" width="80" />
                <el-table-column prop="status"    label="状态"      align="center"/>
                <el-table-column prop="refund"    label="退款金额"   align="center"/>
                <el-table-column prop="should_refund" label="应退金额" align="center"/>
                <el-table-column label="操作" align="center">
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
        name: "refundOrder",
        data() {
            return {
                searchMsg:{
                    orderid:'',
                    time:{
                        start:'',
                        end:''
                    }
                },
                orderList:[
                    {id:'1',order_id:'5239',order_sn:'202007131727349137',commodity:'绿茶',reason:'不想要了',addtime:'2020-07-13 17:29:13',mobile:'17356448797',username:'苏琪',status:'已退款',refund:'10',should_refund:'10'}
                ]
            }
        },
        created() {
        },
        mounted() {
        },
        methods: {
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
    @import "./../../styles/pages/order/refundOrder";
</style>