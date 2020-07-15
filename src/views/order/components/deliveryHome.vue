<template>
    <div class="deliveryType">
        <div class="typeTitle">
            <div class="titleMessage">
                <h4>送货到家</h4>
                <p>开启后，由您提供送货上门服务。</p>
            </div>
            <div class="optionBtn">
                <el-switch
                        v-model="switchStatus"
                        active-color="#627FFF"
                        inactive-color="#bfbfbf">
                </el-switch>
            </div>
        </div>
        <div class="setContainer">
            <div class="setItem">
                <div class="setTitle">
                    <span>*</span>
                    <p>购物袋金额(元)</p>
                </div>
                <el-input v-model="setting.gwd" placeholder="请输入金额" :disabled="!switchStatus"></el-input>
            </div>
            <div class="setItem">
                <div class="setTitle">
                    <span>*</span>
                    <p>下单最低起送价(元)</p>
                </div>
                <el-input v-model="setting.delivery_price" placeholder="请输入金额" :disabled="!switchStatus"></el-input>
            </div>
            <div class="setItem">
                <div class="setTitle">
                    <span>*</span>
                    <p>配送日期范围</p>
                </div>
                <el-checkbox-group v-model="setting.sendTime" :disabled="!switchStatus">
                    <el-checkbox label="今天"></el-checkbox>
                    <el-checkbox label="明天"></el-checkbox>
                    <el-checkbox label="后天"></el-checkbox>
                </el-checkbox-group>
            </div>
            <div class="setItem">
                <div class="setTitle">
                    <span>*</span>
                    <p>物流配送方式</p>
                </div>
                <el-radio-group v-model="setting.logistics_type" :disabled="!switchStatus">
                    <el-radio :label="1">员工配送</el-radio>
                    <el-radio :label="2">第三方物流配送</el-radio>
                </el-radio-group>
            </div>
            <!--     员工配送      -->
            <div class="setItem" v-if="setting.logistics_type == 1">
                <div class="setTitle">
                    <span>*</span>
                    <p>运费设置(元)</p>
                </div>
                <el-input v-model="setting.freight" placeholder="请输入金额"></el-input>
            </div>
            <div class="setItem" v-if="setting.logistics_type == 1">
                <div class="setTitle">
                    <span>*</span>
                    <p>免运费活动(元)</p>
                </div>
                <el-input v-model="setting.free_freight" placeholder="请输入金额"></el-input>
            </div>
            <!--    第三方配送    -->
            <div class="setItem" v-if="setting.logistics_type == 2">
                <div class="setTitle">
                    <span>*</span>
                    <p>物流公司</p>
                </div>
                <el-radio-group v-model="setting.logistics_company" :disabled="!switchStatus">
                    <el-radio :label="1">达达</el-radio>
                    <el-radio :label="2">蜂鸟</el-radio>
                    <el-radio :label="3">快跑者</el-radio>
                </el-radio-group>
            </div>
            <div class="setItem" v-if="setting.logistics_type == 2">
                <div class="setTitle">
                    <p>运费补贴</p>
                </div>
                <div class="freeDiscount">
                    <div class="freeDiscountItem">
                        <el-checkbox v-model="setting.san_free_discount" style="margin-right: 10px">免运费配置(满多少免运费(单位：元))</el-checkbox>
                        <el-input v-model="setting.san_free_discount_money" :disabled="!setting.san_free_discount" placeholder="请输入免运费金额"></el-input>
                    </div>
                    <div class="freeDiscountItem">
                        <p style="margin-bottom: 10px">
                            <el-checkbox v-model="setting.reduce_free_discount">减运费配置</el-checkbox>
                        </p>
                        <el-radio-group v-model="setting.reduce_free_discount_type" :disabled="!setting.reduce_free_discount">
                            <el-radio :label="1">固定价格补贴</el-radio>
                            <el-radio :label="2">按运费比例补贴</el-radio>
                            <el-radio :label="3">最高价补贴</el-radio>
                        </el-radio-group>
                        <p style="margin-top: 10px">
                            <el-input
                                    v-if="setting.reduce_free_discount_type == 1"
                                    v-model="setting.reduce_free_discount_money1"
                                    :disabled="!setting.reduce_free_discount"
                                    placeholder="请输入固定价格补贴"
                            ></el-input>
                            <span v-if="setting.reduce_free_discount_type == 1">元（例：2元、2.3元）</span>
                            <el-input
                                    v-if="setting.reduce_free_discount_type == 2"
                                    v-model="setting.reduce_free_discount_money2"
                                    :disabled="!setting.reduce_free_discount"
                                    placeholder="请输入运费比例"
                            ></el-input>
                            <span v-if="setting.reduce_free_discount_type == 2">%（例：30%）</span>
                            <el-input
                                    v-if="setting.reduce_free_discount_type == 3"
                                    v-model="setting.reduce_free_discount_money3"
                                    :disabled="!setting.reduce_free_discount"
                                    placeholder="请输入最高价值"
                            ></el-input>
                            <span v-if="setting.reduce_free_discount_type == 3">用户实际运费不会超过此运费</span>
                        </p>
                    </div>
                </div>
            </div>
            <!--    其他配置项    -->
            <div class="setItem">
                <div class="setTitle">
                    <span>*</span>
                    <p>最大配送距离(米)</p>
                </div>
                <el-input v-model="setting.max_distance" placeholder="请输入距离数"></el-input>
            </div>
            <div class="setItem">
                <div class="setTitle">
                    <span>*</span>
                    <p>配送时间</p>
                </div>
                <div class="tagList">
                    <el-tag>标签一</el-tag>
                </div>
            </div>
            <el-button type="primary" size="medium">保存</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "deliveryHome",
        data(){
            return{
                switchStatus:true,
                setting:{
                    gwd:'',                 // 购物袋
                    delivery_price:'',      // 最低起送价
                    sendTime:[],            // 配送时间
                    logistics_type:'',      // 配送类型，员工配、三方配
                    freight:'',             // 运费设置
                    free_freight:'',        // 免运费
                    max_distance:'',        // 最大配送距离
                    logistics_company:'',   // 物流公司
                    san_free_discount:false, // 是否开启三方物流免运费配置
                    san_free_discount_money:'', // 三方物流免运费金额
                    reduce_free_discount:false,   // 是否开启三方物流减运费
                    reduce_free_discount_type:'', // 三方减运费类型
                    reduce_free_discount_money1:'',// 三方减运费金额
                    reduce_free_discount_money2:'',
                    reduce_free_discount_money3:'',
                }
            }
        },
        created() {
        },
        mounted() {
        },
        methods:{

        }
    }
</script>

<style scoped lang="less">
    .el-input{
        width: 20%;
    }
    .deliveryType{
        .typeTitle{
            padding: 20px;
            background-color: #F9FAFC;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .titleMessage{
                h4{
                    margin-bottom: 5px;
                }
                p{
                    font-size: 14px;
                }
            }
            .optionBtn{
                width: 50px;
                height: 50px;
            }
        }
        .setContainer {
            margin-top: 20px;
            padding-left: 20px;
            .setItem {
                display: flex;
                align-items: center;
                margin-bottom: 25px;

                .setTitle {
                    display: flex;
                    align-items: center;
                    margin-right: 20px;
                    font-size: 14px;

                    span {
                        display: inline-block;
                        margin-top: 5px;
                        margin-right: 5px;
                        color: #F30;
                        font-size: 14px;
                        vertical-align: middle;
                    }

                    p {
                        width: 9em;
                        font-size: 14px;
                        //text-align-last: justify;
                        text-align: right;
                        //text-justify: distribute-all-lines;
                    }
                }
                .freeDiscount{
                    width: 100%;
                    .freeDiscountItem{
                        width: 100%;
                        span{
                            font-size: 14px;
                            margin-left: 10px;
                            color: #999999;
                        }
                    }
                }
            }
        }
    }
</style>