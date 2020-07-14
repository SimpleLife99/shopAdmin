<template>
    <div class="sendSetting">
        <div class="setContent">
            <div class="setContainer">
                <div class="tabs">
                    <div :class="[currentTab === 1 ? 'tabsItem_active':'','tabsItem']" @click="currentTab = 1">
                        <p>到店自提</p>
                    </div>
                    <div :class="[currentTab === 2 ? 'tabsItem_active':'','tabsItem']" @click="currentTab = 2">
                        <p>送货到家</p>
                    </div>
                    <div class="tabs_bar" :style="{left:`${(currentTab-1) * 120}px`}"></div>
                </div>
                <div class="tabsPane">
                    <transition name="el-fade-in-linear" mode="out-in">
                        <selfRaising v-if="currentTab == 1" key="selfRaising"/>
                        <deliveryHome v-if="currentTab == 2" key="deliveryHome"/>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import selfRaising from './components/selfRaising'
    import deliveryHome from  './components/deliveryHome'
    export default {
        name: "sendSetting",
        data(){
            return{
                currentTab:1,
                setting:{
                    type:[],                // 配送方式
                    gwd:'',                 // 购物袋金额
                    delivery_price:'',      // 下单起送价
                    sendTime:[],            // 自提，配送时间范围
                    logistics_type:'',      // 送货方式
                    freight:'',             // 运费
                    free_freight:'',        // 免运费活动价
                    delivery_distance:''    // 配送距离
                },
            }
        },
        components:{selfRaising,deliveryHome},
        created() {
        },
        mounted() {
        },
        methods:{
            handleClick(tab, event) {
                console.log(tab, event);
            },
            saveSetting(){
                console.log(this.setting)
            }
        }
    }
</script>

<style scoped lang="less">
    @import "./../../styles/pages/order/sendSetting";
</style>