<template>
    <div class="order">
        <div class="searchArea">
            <div class="inputArea">
                <div class="inputBox">
                    <p>订单类型</p>
                    <el-select v-model="searchMsg.orderType" placeholder="请选择">
                        <el-option
                                v-for="(item,index) in searchData.orderType"
                                :key="index"
                                :label="item.value"
                                :value="item.label">
                        </el-option>
                    </el-select>
                </div>
                <div class="inputBox">
                    <p>订单编号</p>
                    <el-input class="inputsn" v-model="searchMsg.ordersn" placeholder="请输入内容"></el-input>
                </div>
                <div class="inputBox">
                    <p>订单状态</p>
                    <el-select v-model="searchMsg.orderState" placeholder="请选择">
                        <el-option
                                v-for="item in searchData.orderState"
                                :key="item.label"
                                :label="item.value"
                                :value="item.label">
                        </el-option>
                    </el-select>
                </div>
                <div class="inputBox">
                    <p>支付状态</p>
                    <el-select v-model="searchMsg.paystate" placeholder="请选择">
                        <el-option
                                v-for="item in searchData.paystate"
                                :key="item.label"
                                :label="item.value"
                                :value="item.label">
                        </el-option>
                    </el-select>
                </div>
                <div class="inputBox">
                    <p>支付方式</p>
                    <el-select v-model="searchMsg.payMode" placeholder="请选择">
                        <el-option
                                v-for="item in searchData.payMode"
                                :key="item.label"
                                :label="item.value"
                                :value="item.label">
                        </el-option>
                    </el-select>
                </div>
                <div class="inputBox">
                    <p>门店</p>
                    <el-select v-model="searchMsg.shop" placeholder="请选择">
                        <el-option
                                v-for="item in searchData.shop"
                                :key="item.label"
                                :label="item.value"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="inputBox">
                    <p>下单时间</p>
                    <el-date-picker
                            v-model="searchMsg.orderTime.start"
                            type="datetime"
                            placeholder="选择开始时间">
                    </el-date-picker>
                    <span class="centerValue">至</span>
                    <el-date-picker
                            v-model="searchMsg.orderTime.end"
                            type="datetime"
                            placeholder="选择结束时间">
                    </el-date-picker>
                </div>
            </div>
            <div class="operationArea">
                <div class="orderNum">
                    <span>订单数据：</span>
                    <div class="order-gmv">gmv：300.27</div>
                    <div class="order-gmv">订单数：100</div>
                </div>
                <div class="operation">
                    <el-button class="searchBtn" type="primary" icon="el-icon-search">搜索</el-button>
                    <el-button type="success" icon="el-icon-download">列表导出</el-button>
                    <el-button type="success" icon="el-icon-download">统计导出</el-button>
                </div>
            </div>
        </div>
        <div class="orderList">
            <el-table
                    :data="orderList"
                    size="medium"
                    v-loading="tableLoading"
                    :header-cell-style="{background:'#f2f5ff'}"
                    style="width: 100%">
                <el-table-column prop="id" label="序号" align="center" width="50"/>
                <el-table-column prop="goodsn" label="订单编号" align="center" width="120" />
                <el-table-column prop="amount" label="应付金额" align="center" width="120"/>
                <el-table-column prop="price" label="实付金额" align="center" width="120"/>
                <el-table-column label="订单类型" align="center" width="120">
                    <template slot-scope="scope">
                        <span>{{ scope.row.ordertype }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="orderState" label="订单状态" align="center" width="120"/>
                <el-table-column prop="payMode" label="支付方式" align="center" width="120"/>
                <el-table-column prop="phone" label="手机号码" align="center" width="120"/>
                <el-table-column prop="note" label="用户留言" align="center"/>
                <el-table-column prop="createTime" label="下单时间" align="center" width="150"/>
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
        name: "index",
        data() {
            return {
                tableLoading:false,         // 列表加载
                currentPage:1,
                pageSize:10,
                searchData: {
                    orderType: [{label: 0, value: '全部类型'}, {label: 1, value: '到家订单'}, {label: 2, value: '到店订单'}],
                    orderState: [
                        {label: 0, value: '待接单'},
                        {label: 1, value: '已接单'},
                        {label: 2, value: '已拣货'},
                        {label: 3, value: '已取货'},
                        {label: 4, value: '已配送'},
                        {label: 5, value: '已送达'},
                        {label: 6, value: '已取货'}
                    ],
                    paystate: [{label: 0, value: '已支付'}, {label: 1, value: '未支付'}],
                    payMode: [{label: 0, value: '微信'}, {label: 1, value: '支付宝'}],
                    shop: [{label: 0, value: '望江花园'}, {label: 1, value: '书香门第'}]
                },
                searchMsg: {
                    orderType: '',   // 订单类型
                    ordersn: '',     // 订单编号
                    orderTime: {
                        start: '',
                        end: ''
                    },
                    orderState: '',  // 订单状态
                    paystate: '',    // 支付状态
                    payMode: '',     // 支付方式
                    shop: ''         // 店铺
                },
                orderList: [
                    {
                        id: '1',
                        goodsn: '20206181803',
                        shop: '望江花园',
                        amount: '10.0',
                        price: '5.00',
                        ordertype: 1,
                        orderState: '待接单',
                        payMode: '微信',
                        phone: '18132807673',
                        note: '无',
                        createTime: '2020-06-18 18:07'
                    }
                ]
            }
        },
        mounted() {
        },
        created() {
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
    @import "./../../styles/pages/order/index";
</style>