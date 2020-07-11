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
            },
            pieData: {
                type: Array,
                // default: ''
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
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        left: 'center',
                        bottom: 'bottom',
                        data: [
                            {name: '未支付', icon: 'circle'},
                            {name: '已支付', icon: 'circle'},
                            {name: '待配送', icon: 'circle'},
                            {name: '已送达', icon: 'circle'},
                            {name: '已收货', icon: 'circle'},
                            {name: '已退款', icon: 'circle'},
                        ]
                    },
                    color: ['#ffc700', '#2c4768', '#ff0692', '#655be9', '#e455fe', '#318eff'],
                    series: [
                        {
                            name: '订单状态信息',
                            type: 'pie',
                            radius: [70, 100],
                            labelLine: {
                                show: false
                            },
                            label: {
                                show: false,
                                position: 'center'
                            },
                            data: this.pieData
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
