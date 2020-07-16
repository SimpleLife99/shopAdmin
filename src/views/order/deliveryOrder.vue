<template>
    <div class="deliveryOrder">
        <div class="searchArea">
            <div class="inputArea">
                <div class="inputBox">
                    <p>订单编号</p>
                    <el-input v-model="searchMsg.order_sn" placeholder="请输入内容"></el-input>
                </div>
                <div class="inputBox">
                    <p>订单状态</p>
                    <el-select v-model="searchMsg.order_status" placeholder="请选择">
                        <el-option
                                v-for="item in orderStatus"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="inputBox">
                    <p>支付状态</p>
                    <el-select v-model="searchMsg.pay_status" placeholder="请选择">
                        <el-option
                                v-for="item in payStatus"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
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
                <el-button class="searchBtn" type="primary" icon="el-icon-search">搜索</el-button>
                <el-button type="success" icon="el-icon-download">导出订单</el-button>
            </div>
        </div>
        <div class="orderList">
            <el-table
                    :data="orderList"
                    size="medium"
                    v-loading="tableLoading"
                    :header-cell-style="{background: '#f2f5ff'}"
                    style="width: 100%">
                <el-table-column align="center" prop="order_sn"  label="订单编号" />
                <el-table-column align="center" prop="money"  label="实付金额"/>
                <el-table-column align="center" prop="order_status"  label="订单状态" width="120" />
                <el-table-column align="center" prop="delivery_status"  label="物流状态"/>
                <el-table-column align="center" prop="company"  label="物流公司"/>
                <el-table-column align="center" prop="phone"  label="手机号码"/>
                <el-table-column align="center" prop="note"  label="用户留言" />
                <el-table-column align="center" prop="addtime"  label="下单时间"/>
                <el-table-column align="center" label="操作">
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
        name: "deliveryOrder",
        data(){
            return{
                tableLoading:false,         // 列表加载
                searchMsg:{
                    order_sn: '',
                    order_status:'',
                    time:{
                        start:'',
                        end:''
                    },
                    pay_status:''
                },
                orderStatus:[
                    {value:1,label:'待接单'},
                    {value:2,label:'已接单'},
                    {value:3,label:'已拣货'},
                    {value:4,label:'已取货'},
                    {value:5,label:'已配送'},
                    {value:6,label:'已送达'},
                    {value:7,label:'已收货'},
                    {value:8,label:'已核验'},
                    {value:9,label:'支付成功物流创建失败'},
                ],
                payStatus:[{value:1,label:'未支付'},{value:2,label:'已支付'}],
                orderList:[
                    {order_sn: '202005281507224694',money: '0.02',order_status: '退款成功',delivery_status:'未创建物流订单',company:'达达',phone:'15684590097',note:'留言',addtime:'2020-05-28 15:07:26'}
                ]
            }
        },
        created() {
        },
        mounted() {
        },
        methods:{
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
    @import "./../../styles/pages/order/deliveryOrder";
</style>