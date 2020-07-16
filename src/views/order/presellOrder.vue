<template>
    <div class="presellOrder">
        <div class="searchArea">
            <div class="inputArea">
                <div class="inputBox">
                    <p>订单编号</p>
                    <el-input v-model="searchMsg.orderid" placeholder="请输入内容"></el-input>
                </div>
                <div class="inputBox">
                    <p>商品名称</p>
                    <el-input v-model="searchMsg.goodsname" placeholder="请输入内容"></el-input>
                </div>
                <div class="inputBox">
                    <p>手机号码</p>
                    <el-input v-model="searchMsg.phone" placeholder="请输入内容"></el-input>
                </div>
                <div class="inputBox">
                    <p>订单状态</p>
                    <el-select v-model="searchMsg.orderState" placeholder="请选择">
                        <el-option
                                v-for="item in status"
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
                <el-table-column align="center" prop="orderid"  label="订单编号" />
                <el-table-column align="center" prop="goodsname"  label="商品名称"/>
                <el-table-column align="center" prop="phone"  label="手机号" width="120" />
                <el-table-column align="center" prop="addtime"  label="创建时间"/>
                <el-table-column align="center" prop="note"  label="用户留言"/>
                <el-table-column align="center" prop="orderType"  label="订单类型"/>
                <el-table-column align="center" prop="orderStatus"  label="订单状态" />
                <el-table-column align="center" prop="money"  label="实付金额"/>
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
        name: "presellOrder",
        data(){
            return{
                tableLoading:false,             // 列表加载
                searchMsg:{
                    orderid:'',
                    time:{
                        start:'',
                        end:''
                    },
                    phone:'',
                    goodsname:'',
                    orderStatus:''
                },
                status:[
                    {value:1,label:'全部'},
                    {value:2,label:'待付定金'},
                    {value:3,label:'待付尾款'},
                    {value:4,label:'已付尾款'},
                    {value:5,label:'交易关闭'},
                    {value:6,label:'交易关闭（客户违约）'},
                    {value:7,label:'交易关闭（客户取消）'},
                ],
                orderList:[
                    {orderid: '20200605102201587',goodsname: '青岛啤酒崂山清爽330ml*6',phone: '15684590097',addtime: '2020-06-05 10:20:01',note:'留言',orderType:'提货',orderStatus: '退款成功',money:'0.5'}
                ]
            }
        },
        created(){

        },
        mounted(){

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
    @import "./../../styles/pages/order/presellOrder";
</style>