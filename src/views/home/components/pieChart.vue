<template>
    <div :class="className" :style="{width: width,height: height}"></div>
</template>

<script>
    import echarts from 'echarts'
    import resize from "./mixins/resize";

    require('echarts/theme/macarons') // echarts theme

    export default {
        name: "pieChart",
        mixins: [resize],
        props: {
            className: {
                type: String,
                default: 'pieChartitem'
            },
            width: {
                type: String,
                default: '100%'
            },
            height: {
                type: String,
                default: '300px'
            }
        },
        data() {
            return {
                chart: null
            }
        },
        mounted() {
            this.initChart()
        },
        created() {

        },
        methods: {
            initChart() {
                this.chart = echarts.init(this.$el, 'macarons')

                this.chart.setOption({
                    title: {
                        text: '订单数据',
                        top: 10,
                        left: 10,
                        textStyle: {
                            fontSize: 14,
                            fontWeight: 'normal',
                            color: '#409eff'
                        }
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        left: 'center',
                        bottom: '10',
                        data: ['未支付', '已支付', '待配送', '已送达', '已收货', '已退款']
                    },
                    series: [
                        {
                            name: '订单状态信息',
                            type: 'pie',
                            roseType: 'radius',
                            radius: [15, 95],
                            data: [
                                {value: 235, name: '未支付'},
                                {value: 274, name: '已支付'},
                                {value: 310, name: '待配送'},
                                {value: 335, name: '已送达'},
                                {value: 400, name: '已收货'},
                                {value: 50, name: '已退款'}
                            ]
                        }
                    ]
                })
                // console.log(this.$el)
            }
        }
    }
</script>

<style scoped>

</style>