<template>
    <div class="home">
        <div class="dataBoard">
            <div class="boardItem">
                <div class="boardIcon"><i class="el-icon-s-goods" style="color: #fdc7a1"></i></div>
                <div class="boardNum">
                    <p>金额</p>
                    <div class="countNum">
                        <span>￥</span>
                        <countTo
                                :startVal=countNum.money.start
                                :endVal=countNum.money.end
                                :duration=countNum.duration
                                :autoplay=countNum.autoplay
                        />
                    </div>
                </div>
            </div>
            <div class="boardItem">
                <div class="boardIcon"><i class="el-icon-s-marketing" style="color: #89c6f8"></i></div>
                <div class="boardNum">
                    <p>订单量</p>
                    <div class="countNum">
                        <countTo
                                :startVal=countNum.order.start
                                :endVal=countNum.order.end
                                :duration=countNum.duration
                                :autoplay=countNum.autoplay
                        />
                    </div>
                </div>
            </div>
            <div class="boardItem">
                <div class="boardIcon"><i class="el-icon-s-finance" style="color: #fdd037"></i></div>
                <div class="boardNum">
                    <p>优惠券</p>
                    <div class="countNum">
                        <countTo
                                :startVal=countNum.discount.start
                                :endVal=countNum.discount.end
                                :duration=countNum.duration
                                :autoplay=countNum.autoplay
                        />
                    </div>
                </div>
            </div>
            <div class="boardItem">
                <div class="boardIcon"><i class="el-icon-s-data" style="color: #79e2d6"></i></div>
                <div class="boardNum">
                    <p>店铺</p>
                    <div class="countNum">
                        <countTo
                                :startVal=countNum.shop.start
                                :endVal=countNum.shop.end
                                :duration=countNum.duration
                                :autoplay=countNum.autoplay
                        />
                    </div>
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
        <div class="line-chart">
            <!-- 折线图 -->
            <lineChart/>
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
                countNum: {
                    duration: 3000,
                    autoplay: true,
                    money: {
                        start: 0,
                        end: 1000
                    },
                    order: {
                        start: 0,
                        end: 100
                    },
                    shop: {
                        start: 0,
                        end: 5
                    },
                    discount: {
                        start: 0,
                        end: 40
                    }
                }
            }
        },
        components: {countTo,pieChart,barChart,lineChart},
        computed: {
        },
        created() {
        },
        mounted() {
        },
        methods: {
        }
    }
</script>
<style scoped lang="less">
    @import "./../../styles/pages/home/index";
</style>
