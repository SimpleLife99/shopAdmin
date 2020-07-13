<template>
    <div class="home">
        <div class="searchBox">
            <div class="choiceDate">
                <div
                        :class="[item.id == currentDate ? 'dateItemActive':'' ,'dateItem' ]"
                        v-for="(item) in choiceDate"
                        :key="item.id"
                        @click="changeDateItem(item.id)"
                >{{ item.name }}
                </div>
                <div class="slipBox" :style="{ left:slipLeft+'px'}"></div>
            </div>
            <div class="choiceTime">
                <el-date-picker
                        v-model="dateTime"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                </el-date-picker>
                <div class="confirmTime" @click="changeDateTime">查找</div>
            </div>
        </div>
        <!--    数据模块    -->
        <div class="dataModular">
            <div class="modularItem">
                <div class="modularContainer">
                    <p class="modularTitle">会员</p>
                    <div class="memberData">
                        <div class="modularIcon">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#iconpintuan"></use>
                            </svg>
                        </div>
                        <h2>
                            <countTo :startVal="countNum.startVal" :endVal="300" :duration="countNum.duration"
                                     :autoplay="countNum.autoplay"></countTo>
                        </h2>
                        <p>人数</p>
                    </div>
                </div>
            </div>
            <div class="modularItem">
                <div class="modularContainer">
                    <p class="modularTitle">商品(件)</p>
                    <div class="modularAllDate">
                        <h2>
                            <countTo :startVal="countNum.startVal" :endVal="3820" :duration="countNum.duration"
                                     :autoplay="countNum.autoplay"></countTo>
                        </h2>
                        <img src="@/assets/home/data1.png" alt="">
                    </div>
                    <div class="modularMessage">
                        <div class="messageLeft">
                            <p class="msgTitle">在售商品</p>
                            <p class="msgData">
                                <countTo :startVal="countNum.startVal" :endVal="324" :duration="countNum.duration"
                                         :autoplay="countNum.autoplay"></countTo>
                            </p>
                        </div>
                        <div class="messageRight">
                            <p class="msgTitle">下架商品</p>
                            <p class="msgData">
                                <countTo :startVal="countNum.startVal" :endVal="100" :duration="countNum.duration"
                                         :autoplay="countNum.autoplay"></countTo>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modularItem">
                <div class="modularContainer">
                    <p class="modularTitle">支付订单(笔)</p>
                    <div class="modularAllDate">
                        <h2>
                            <countTo :startVal="countNum.startVal" :endVal="3860" :duration="countNum.duration"
                                     :autoplay="countNum.autoplay"></countTo>
                        </h2>
                        <img src="@/assets/home/data2.png" alt="">
                    </div>
                    <div class="modularMessage">
                        <div class="messageLeft">
                            <p class="msgTitle">微信</p>
                            <p class="msgData">
                                <countTo :startVal="countNum.startVal" :endVal="354" :duration="countNum.duration"
                                         :autoplay="countNum.autoplay"></countTo>
                            </p>
                        </div>
                        <div class="messageRight">
                            <p class="msgTitle">支付宝</p>
                            <p class="msgData">
                                <countTo :startVal="countNum.startVal" :endVal="568" :duration="countNum.duration"
                                         :autoplay="countNum.autoplay"></countTo>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modularItem">
                <div class="modularContainer">
                    <p class="modularTitle">销售额(元)</p>
                    <div class="modularAllDate">
                        <h2>
                            <countTo :startVal="countNum.startVal" :endVal="3540" :duration="countNum.duration"
                                     :autoplay="countNum.autoplay"></countTo>
                        </h2>
                        <img src="@/assets/home/data3.png" alt="">
                    </div>
                    <div class="modularMessage">
                        <div class="messageLeft">
                            <p class="msgTitle">微信</p>
                            <p class="msgData">
                                <countTo :startVal="countNum.startVal" :endVal="1254" :duration="countNum.duration"
                                         :autoplay="countNum.autoplay"></countTo>
                            </p>
                        </div>
                        <div class="messageRight">
                            <p class="msgTitle">支付宝</p>
                            <p class="msgData">
                                <countTo :startVal="countNum.startVal" :endVal="1800" :duration="countNum.duration"
                                         :autoplay="countNum.autoplay"></countTo>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modularItem">
                <div class="modularContainer">
                    <p class="modularTitle">退款订单(件)</p>
                    <div class="modularAllDate">
                        <h2>
                            <countTo :startVal="countNum.startVal" :endVal="2574" :duration="countNum.duration"
                                     :autoplay="countNum.autoplay"></countTo>
                        </h2>
                        <img src="@/assets/home/data4.png" alt="">
                    </div>
                    <div class="modularMessage">
                        <div class="messageLeft">
                            <p class="msgTitle">微信</p>
                            <p class="msgData">
                                <countTo :startVal="countNum.startVal" :endVal="2150" :duration="countNum.duration"
                                         :autoplay="countNum.autoplay"></countTo>
                            </p>
                        </div>
                        <div class="messageRight">
                            <p class="msgTitle">支付宝</p>
                            <p class="msgData">
                                <countTo :startVal="countNum.startVal" :endVal="100" :duration="countNum.duration"
                                         :autoplay="countNum.autoplay"></countTo>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--    数据面板    -->
        <div class="messageBoard">
            <div class="boardLeft">
                <div class="boardTitle">
                    <div class="littleBlock"></div>
                    <p>订单金额图</p>
                </div>
                <div class="line-chart">
                    <!--    折线图    -->
                    <lineChart/>
                </div>
            </div>
            <div class="boardRight">
                <div class="boardTitle">
                    <div class="littleBlock"></div>
                    <p>订单占比</p>
                </div>
                <div class="pie-chart">
                    <!-- 饼状图 -->
                    <pieChart :pieData = pieMsg />
                    <div class="pieCenter">
                        <div class="centerNum">
                            <countTo :startVal="countNum.startVal" :endVal="100" :duration="countNum.duration"
                                     :autoplay="countNum.autoplay"></countTo>
                        </div>
                        <p class="centerText">总订单</p>
                    </div>
                </div>
            </div>
        </div>
        <!--   订单数据   -->
        <div class="orderBoard">
            <div class="boardLeft">
                <div class="boardTitle">
                    <div class="littleBlock"></div>
                    <p>商品销量Top10</p>
                </div>
                <!--   商品条形图   -->
                <div class="bar-chart">
                    <!--柱状图-->
                    <barChart/>
                </div>
            </div>
            <div class="boardRight">
                <!--  门店排行  -->
                <div class="boardContainer">
                    <div class="boardTitle">
                        <div class="littleBlock"></div>
                        <p>门店排行Top5</p>
                    </div>
                    <div class="storeRanking">
                        <div class="paymentMethodTab">
                            <el-button :class="[ currentPay=== 'weixin' ? 'paymentActive':'','paymentBtn']" @click="changeStoreRanking('weixin')" type="primary" round>微信</el-button>
                            <el-button :class="[ currentPay=== 'zhifubao' ? 'paymentActive':'','paymentBtn']" @click="changeStoreRanking('zhifubao')" type="primary" round>支付宝</el-button>
                        </div>
                        <div class="payMentList">
                            <el-table
                                    :data="storeRanking"
                                    :header-cell-style="{background:'#f2f5ff'}"
                                    style="width: 100%">
                                <el-table-column
                                        align="center"
                                        prop="sort"
                                        label="排序" >
                                </el-table-column>
                                <el-table-column
                                        align="center"
                                        prop="name"
                                        label="门店" >
                                </el-table-column>
                                <el-table-column
                                        align="center"
                                        prop="effectiveOrder"
                                        label="有效订单">
                                </el-table-column>
                                <el-table-column
                                        align="center"
                                        prop="Actualpayment"
                                        label="实付款">
                                </el-table-column>
                                <el-table-column
                                        align="center"
                                        prop="totalOrder"
                                        label="总订单">
                                </el-table-column>
                                <el-table-column
                                        align="center"
                                        prop="totalMoney"
                                        label="总金额">
                                </el-table-column>
                            </el-table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import countTo from 'vue-count-to'
    import pieChart from "./components/pieChart";
    import barChart from "./components/barChart";
    import lineChart from "./components/lineChart";

    export default {
        name: 'Home',
        data() {
            return {
                orderTabIndex: 0,
                choiceDate: [{id: 1, name: '默认'}, {id: 2, name: '今日'}, {id: 3, name: '本周'}, {id: 4, name: '本月'}],
                currentDate: 1,
                currentPay:'weixin',
                dateTime: null,                               // 选择的时间段
                slipLeft: 0,                                  //  滑块位置
                orderTabTitle: ['订单明细', '金额明细'],         //  订单明细的tab切换
                countNum: {                                   // 滚动数字通用配置项
                    startVal: 0,
                    duration: 3000,
                    autoplay: true
                },
                /* 饼状图所需数据 */
                pieMsg:[
                    {value: 235, name: '未支付'},
                    {value: 274, name: '已支付'},
                    {value: 310, name: '待配送'},
                    {value: 335, name: '已送达'},
                    {value: 400, name: '已收货'},
                    {value: 100, name: '已退款'}
                ],
                /*  门店排行的数据  */
                storeRanking:[
                    {sort:1,name:'望江花园店',effectiveOrder:'300',Actualpayment:'280',totalOrder:'500',totalMoney:'1000'},
                    {sort:2,name:'书香门第店',effectiveOrder:'156',Actualpayment:'545',totalOrder:'248',totalMoney:'1553'}
                ]
            }
        },
        // eslint-disable-next-line vue/no-unused-components
        components: {countTo, pieChart, barChart, lineChart},
        computed: {},
        created() {
        },
        mounted() {
        },
        methods: {
            changeDateItem(id) {
                this.currentDate = id
                this.slipLeft = (id - 1) * 80
            },
            changeDateTime() {
                if (! this.dateTime == null) {
                    console.log(this.dateTime)
                } else {
                    this.$message.error('先选择时间，再查找！');
                }

            },
            changeOrderTab(index) {
                this.orderTabIndex = index
            },
            changeStoreRanking(type){
                /*
                * 切换门店排行
                * type 接收 weixin(微信) ,zhifubao(支付宝)
                * */
                this.currentPay = type
            }
        }
    }
</script>
<style scoped lang="less">
    @import "./../../styles/pages/home/index";
</style>
