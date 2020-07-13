<template>
    <div :class="className" :style="{width: width,height: height}"></div>
</template>

<script>
    import echarts from 'echarts'
    import resize from "./mixins/resize";

    require('echarts/theme/macarons') // echarts theme

    export default {
        name: "barChart",
        mixins: [resize],
        props: {
            className: {
                type: String,
                default: 'barChartitem'
            },
            width: {
                type: String,
                default: '100%'
            },
            height: {
                type: String,
                default: '350px'
            }
        },
        data() {
            return {
                chart: null,
                commodityData: [
                    '杏花楼蛋黄莲蓉月饼',
                    '采石鸡蛋鸡丝茶干',
                    '可口可乐',
                    '农夫山泉',
                    '威化网红曲奇',
                    '丽芝士nabati纳宝帝奶酪威化饼干',
                    'Tango咔咔脆巧克力脆香',
                    'Danisa皇冠丹麦黄油曲奇饼干',
                    'GEMEZ烧烤味小鸡干脆',
                    '意大利面条500g',
                    '海太蜂蜜黄油薯片60g土豆片',
                    '小力士辅食鱼肠80g'
                ]
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
                    xAxis: {
                        type: 'category',
                        data: this.commodityData,
                        axisLabel: {
                            formatter: function (value) {
                                return value.substr(0, 4).split('').join('\n');
                            }
                        },
                        axisLine:{
                            lineStyle:{
                                color:'#aaaaaa'
                            }
                        }
                    },
                    yAxis: {
                        type: 'value',
                        axisLine:{
                            lineStyle:{
                                color:'#aaaaaa'
                            }
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: { // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        top: 20,
                        left: '2%',
                        right: '2%',
                        bottom: '3%',
                        containLabel: true
                    },
                    // 数据过多的横向滚动条
                    dataZoom: [{
                        // start: 0,
                        // end: 30,
                        show: false,
                        type: 'slider',
                        xAxisIndex: [0],
                        filterMode: 'filter'
                    }],
                    series: [{
                        name: '销量',
                        data: [270, 200, 150, 80, 70, 110, 130, 110, 80, 10, 26, 89],
                        type: 'bar',
                        barWidth: 2,
                        stack: 'vistors',
                        animation: true,
                        showBackground: true,
                        backgroundStyle: {
                            color: 'rgba(220,220,220,0.2)'
                        },
                        itemStyle: {
                            color: '#6b6eff',
                            borderColor:'#6b6eff',
                            borderWidth:8,
                            barBorderRadius:3
                        }
                    }]
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .barChartitem {
        overflow-x: hidden !important;
        overflow-y: hidden !important;
    }
</style>