<template>
    <div class="presellOrder">
        <div class="searchArea">
            <div class="inputArea">
                <div class="inputBox">
                    <p>订单编号</p>
                    <el-input v-model="searchMsg.orderid" placeholder="请输入内容"></el-input>
                </div>
                <div class="inputBox">
                    <p>商品名称</p>
                    <el-input v-model="searchMsg.goodsname" placeholder="请输入内容"></el-input>
                </div>
                <div class="inputBox">
                    <p>手机号码</p>
                    <el-input v-model="searchMsg.phone" placeholder="请输入内容"></el-input>
                </div>
                <div class="inputBox">
                    <p>订单状态</p>
                    <el-select v-model="searchMsg.orderState" placeholder="请选择">
                        <el-option
                                v-for="item in status"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="inputBox">
                    <p>下单时间</p>
                    <el-date-picker
                            v-model="searchMsg.time.start"
                            type="datetime"
                            placeholder="选择开始时间">
                    </el-date-picker>
                    <span class="centerValue">至</span>
                    <el-date-picker
                            v-model="searchMsg.time.end"
                            type="datetime"
                            placeholder="选择结束时间">
                    </el-date-picker>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "presellOrder",
        data(){
            return{
                searchMsg:{
                    orderid:'',
                    time:{
                        start:'',
                        end:''
                    },
                    phone:'',
                    goodsname:'',
                    orderStatus:''
                },
                status:[
                    {value:1,label:'全部'},
                    {value:2,label:'待付定金'},
                    {value:3,label:'待付尾款'},
                    {value:4,label:'已付尾款'},
                    {value:5,label:'交易关闭'},
                    {value:6,label:'交易关闭（客户违约）'},
                    {value:7,label:'交易关闭（客户取消）'},
                ]
            }
        },
        created(){

        },
        mounted(){

        },
        methods:{

        }
    }
</script>

<style scoped lang="less">
    @import "./../../styles/pages/order/presellOrder";
</style>