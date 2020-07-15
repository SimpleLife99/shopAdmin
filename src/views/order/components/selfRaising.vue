<template>
    <div class="deliveryType">
        <div class="typeTitle">
            <div class="titleMessage">
                <h4>卖家上门提货</h4>
                <p>启用到店自提，用户下完订单以后，前往下单店铺提货。</p>
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
<!--            <div class="setItem">-->
<!--                <div class="setTitle">-->
<!--                    <span>*</span>-->
<!--                    <p>下单最低起送价(元)</p>-->
<!--                </div>-->
<!--                <el-input v-model="setting.delivery_price" placeholder="请输入金额" :disabled="!switchStatus"></el-input>-->
<!--            </div>-->
            <div class="setItem">
                <div class="setTitle">
                    <span>*</span>
                    <p>自提日期范围</p>
                </div>
                <el-checkbox-group v-model="setting.sendTime" :disabled="!switchStatus">
                    <el-checkbox label="今天"></el-checkbox>
                    <el-checkbox label="明天"></el-checkbox>
                    <el-checkbox label="后天"></el-checkbox>
                </el-checkbox-group>
            </div>
            <el-button type="primary" size="medium">保存</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "selfRaising",
        data() {
            return {
                switchStatus: false,
                setting: {
                    gwd: '',
                    delivery_price:'',
                    sendTime:[]
                },
            }
        },
        created() {
        },
        mounted() {
        },
        methods: {}
    }
</script>

<style scoped lang="less">
    .deliveryType {
        .el-input {
            width: 20%;
        }
        .typeTitle {
            padding: 20px;
            background-color: #F9FAFC;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .titleMessage {
                h4 {
                    margin-bottom: 5px;
                }

                p {
                    font-size: 14px;
                }
            }

            .optionBtn {
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
                        width: 7em;
                        font-size: 14px;
                        //text-align-last: justify;
                        text-align: right;
                        //text-justify: distribute-all-lines;
                    }
                }
            }
        }
    }
</style>