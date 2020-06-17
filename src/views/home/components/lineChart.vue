<template>
    <div :class="className" :style="{width: width,height: height}"></div>
</template>

<script>
    import echarts from 'echarts'
    import resize from "./mixins/resize";
    require('echarts/theme/macarons') // echarts theme

    export default {
        mixins: [resize],
        name: "lineChart",
        props: {
            className: {
                type: String,
                default: 'lineChartitem'
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
                chart:null
            }
        },
        mounted() {
            this.initChart()
        },
        methods: {
            initChart(){
                this.chart = echarts.init(this.$el, 'macarons')
                this.chart.setOption({
                    title:{
                        text:'订单金额-订单量曲线',
                        top: 10,
                        left: 10,
                        textStyle: {
                            fontSize: 14,
                            fontWeight: 'normal',
                            color: '#409eff'
                        }
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend:{
                        data:['金额','订单量']
                    },
                    grid: {
                        top: 50,
                        left: '2%',
                        right: '2%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            magicType: {show: true, type: ['stack', 'tiled']},
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['06-11','06-12','06-13','06-14','06-15','06-16','06-17','06-18']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series:[
                        {
                            name:'金额',
                            type:'line',
                            smooth: true,
                            data:[150,123,1546,464,489,158,125,835]
                        },
                        {
                            name:'订单量',
                            type:'line',
                            smooth: true,
                            data:[15,25,35,50,61,23,54,84]
                        }
                    ]
                })
            }
        }
    }
</script>

<style scoped lang="less">
.lineChartitem{
    background-color: #FFFFFF;
    border-radius: 8px;
    padding: 5px 0;
}
</style>