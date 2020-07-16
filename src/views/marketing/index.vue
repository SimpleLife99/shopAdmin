<template>
    <div class="marketing">
        <div class="contnet">
            <div class="marketBox">
                <div class="marketTitle">
                    <p>热门营销</p>
                    <span>提高下单转化率</span>
                </div>
                <div class="hotActivity">
                    <div class="hotItem">
                        <div class="itemIcon">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#iconcuxiao"></use>
                            </svg>
                        </div>
                        <div class="itemText">
                            <p>促销活动</p>
                            <span>订单支付返利，提升订单转化率</span>
                        </div>
                    </div>
                    <div class="hotItem" @click="activityRouter('Seckill')">
                        <div class="itemIcon">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#iconmiaoshaxuanzhong-copy"></use>
                            </svg>
                        </div>
                        <div class="itemText">
                            <p>限时秒杀</p>
                            <span>订单支付返利，提升订单转化率</span>
                        </div>
                    </div>
                    <div class="hotItem">
                        <div class="itemIcon">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#iconpintuan"></use>
                            </svg>
                        </div>
                        <div class="itemText">
                            <p>多人拼团</p>
                            <span>裂变营销，老客户带新客户</span>
                        </div>
                    </div>
                    <div class="hotItem">
                        <div class="itemIcon">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#iconkanjia"></use>
                            </svg>
                        </div>
                        <div class="itemText">
                            <p>砍价活动</p>
                            <span>砍多少，是多少，活动分享</span>
                        </div>
                    </div>
                    <div class="hotItem">
                        <div class="itemIcon">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#iconqunjielong"></use>
                            </svg>
                        </div>
                        <div class="itemText">
                            <p>接龙营销</p>
                            <span>裂变营销，提升订单转化率</span>
                        </div>
                    </div>
                </div>
                <div class="marketTitle">
                    <p>优惠营销</p>
                    <span>提高下单转化率</span>
                </div>
                <div class="activityContent">
                    <div class="activityItem">
                        <div class="itemTop">
                            <div class="activityIcon">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#iconfenxiang1-copy"></use>
                                </svg>
                            </div>
                            <p>分享设置</p>
                        </div>
                        <div class="itemBottom">
                            <span>订单支付返利，提升订单转化率</span>
                        </div>
                    </div>
                    <div class="activityItem">
                        <div class="itemTop">
                            <div class="activityIcon">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#iconyouhuiquanquanmian"></use>
                                </svg>
                            </div>
                            <p>支付宝优惠券</p>
                        </div>
                        <div class="itemBottom">
                            <span>订单支付返利，提升订单转化率</span>
                        </div>
                    </div>
                    <div class="activityItem">
                        <div class="itemTop">
                            <div class="activityIcon">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#iconyouhuiquan"></use>
                                </svg>
                            </div>
                            <p>微信优惠券</p>
                        </div>
                        <div class="itemBottom">
                            <span>订单支付返利，提升订单转化率</span>
                        </div>
                    </div>
                    <div class="activityItem">
                        <div class="itemTop">
                            <div class="activityIcon">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#iconlaxinhuodong"></use>
                                </svg>
                            </div>
                            <p>小蜜蜂</p>
                        </div>
                        <div class="itemBottom">
                            <span>快速拉新，统计拉新信息</span>
                        </div>
                    </div>
                    <div class="activityItem">
                        <div class="itemTop">
                            <div class="activityIcon">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#iconyushou-copy"></use>
                                </svg>
                            </div>
                            <p>商品预售</p>
                        </div>
                        <div class="itemBottom">
                            <span>提前发售，到时配货</span>
                        </div>
                    </div>
                    <div class="activityItem">
                        <div class="itemTop">
                            <div class="activityIcon">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#iconlifangtilitiduomiantifangkuai2"></use>
                                </svg>
                            </div>
                            <p>二级商品池</p>
                        </div>
                        <div class="itemBottom">
                            <span>订单支付返利，提升订单转化率</span>
                        </div>
                    </div>
                    <div class="activityItem">
                        <div class="itemTop">
                            <div class="activityIcon">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#iconbaimingdan"></use>
                                </svg>
                            </div>
                            <p>白名单列表</p>
                        </div>
                        <div class="itemBottom">
                            <span>针对内部员工优惠</span>
                        </div>
                    </div>
                </div>
                <div class="marketTitle">
                    <p>店铺工具</p>
                    <span>提高下单转化率</span>
                </div>
                <div class="activityContent shoputils">
                    <div class="activityItem" @click="activityRouter('customerService')">
                        <div class="itemTop">
                            <div class="activityIcon">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#iconkefu"></use>
                                </svg>
                            </div>
                            <p>客服设置</p>
                        </div>
                        <div class="itemBottom">
                            <span>开启小程序客服功能</span>
                        </div>
                    </div>
                    <div class="activityItem">
                        <div class="itemTop">
                            <div class="activityIcon">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#iconshuju"></use>
                                </svg>
                            </div>
                            <p>刷单设置</p>
                        </div>
                        <div class="itemBottom">
                            <span>开启刷单，使小程序数据更好看。</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import http from '@/http/api/login'
    export default {
        name: "index",
        data() {
            return {}
        },
        created() {
        },
        methods: {
             async login(){
                 let Data = await http.userLogin({})
                 console.log(Data)
             },
            activityRouter(type){
                this.$router.push({name: type,})
            }
        }
    }
</script>

<style scoped lang="less">
    @import "./../../styles/pages/marketing/index";
</style>