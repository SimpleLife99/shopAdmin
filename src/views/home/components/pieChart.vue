<template>
    <div class="pieChartitem" style="width: 100%;height: 300px"></div>
</template>

<script>
    import echarts from 'echarts'

    require('echarts/theme/macarons') // echarts theme
    export default {
        name: "pieChart",
        data() {
            return {
                pieChart: null
            }
        },
        mounted() {
            this.initChart()
        },
        created() {

        },
        methods: {
            initChart() {
                this.pieChart = echarts.init(this.$el, 'macarons')

                this.pieChart.setOption({
                    title: {
                        text: '订单数据',
                        top: 10,
                        left: 10,
                        textStyle: {
                            fontSize: 14,
                            fontWeight: 'normal',
                            color: '#333333'
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