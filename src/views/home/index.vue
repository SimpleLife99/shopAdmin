<template>
    <div class="home">
        <div class="dataBoard">
            <div class="line-chart">
                <!-- 折线图 -->
                <p class="chartTitle">
                    <span>订单明细</span>
                </p>
                <lineChart/>
            </div>
            <div class="orderData">
                <div class="orderTitle">
                    <div class="navItem" v-for="(item,index) in orderTabTitle" :key="index" @click="changeOrderTab(index)">
                        <div class="navLine">{{ item }}</div>
                    </div>
                </div>
                <div class="orderContent" v-if="orderTabIndex === 0">
                    <countTo :startVal="countNum.startVal" :endVal="100" :duration="countNum.duration" :autoplay="countNum.autoplay"></countTo>
                </div>
                <div class="orderContent" v-if="orderTabIndex === 1">
                    <table border="0">
                        <tr style="height: 60px;background-color: #f4f6ff">
                            <th width="40%">类别</th>
                            <th width="20%">支付宝</th>
                            <th width="20%">微信</th>
                            <th width="20%">总计</th>
                        </tr>
                        <tr>
                            <td>昨日订单总量(笔）</td>
                            <td>
                                <countTo
                                        :startVal="countNum.startVal"
                                        :endVal="128"
                                        :duration="countNum.duration"
                                        :autoplay="countNum.autoplay"
                                ></countTo>
                            </td>
                            <td>
                                <countTo
                                        :startVal="countNum.startVal"
                                        :endVal="128"
                                        :duration="countNum.duration"
                                        :autoplay="countNum.autoplay"
                                ></countTo>
                            </td>
                            <td>
                                <countTo
                                        :startVal="countNum.startVal"
                                        :endVal="128"
                                        :duration="countNum.duration"
                                        :autoplay="countNum.autoplay"
                                ></countTo>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div class="chartArea">
            <div class="pie-chart">
                <!-- 饼状图 -->
                <pieChart/>
            </div>
            <div class="bar-chart">
                <!--柱状图-->
                <barChart/>
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
                orderTabTitle: ['订单明细', '金额明细'],    //  订单明细的tab切换
                countNum:{                                //    滚动数字通用配置项
                    startVal:0,
                    duration:3000,
                    autoplay:true
                }
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
            changeOrderTab(index){
                this.orderTabIndex = index
            }
        }
    }
</script>
<style scoped lang="less">
    @import "./../../styles/pages/home/index";
</style>
