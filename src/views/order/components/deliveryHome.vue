<template>
    <div class="deliveryType">
        <h3>送货到家</h3>
        <!--            <div class="setContainer">-->
        <!--                <div class="setItem">-->
        <!--                    <div class="setTitle">-->
        <!--                        <span>*</span>-->
        <!--                        <p>配送方式</p>-->
        <!--                    </div>-->
        <!--                    <el-checkbox-group v-model="setting.type">-->
        <!--                        <el-checkbox label="到店自提"></el-checkbox>-->
        <!--                        <el-checkbox label="送货到家"></el-checkbox>-->
        <!--                    </el-checkbox-group>-->
        <!--                </div>-->
        <!--                <div class="setItem">-->
        <!--                    <div class="setTitle">-->
        <!--                        <span>*</span>-->
        <!--                        <p>购物袋金额(元)</p>-->
        <!--                    </div>-->
        <!--                    <el-input v-model="setting.gwd" placeholder="请输入金额"></el-input>-->
        <!--                </div>-->
        <!--                <div class="setItem">-->
        <!--                    <div class="setTitle">-->
        <!--                        <span>*</span>-->
        <!--                        <p>下单最低起送价(元)</p>-->
        <!--                    </div>-->
        <!--                    <el-input v-model="setting.delivery_price" placeholder="请输入金额"></el-input>-->
        <!--                </div>-->
        <!--                <div class="setItem">-->
        <!--                    <div class="setTitle">-->
        <!--                        <span>*</span>-->
        <!--                        <p>配送方式</p>-->
        <!--                    </div>-->
        <!--                    <el-checkbox-group v-model="setting.sendTime">-->
        <!--                        <el-checkbox label="今天"></el-checkbox>-->
        <!--                        <el-checkbox label="明天"></el-checkbox>-->
        <!--                        <el-checkbox label="后天"></el-checkbox>-->
        <!--                    </el-checkbox-group>-->
        <!--                </div>-->
        <!--                <div class="setItem">-->
        <!--                    <div class="setTitle">-->
        <!--                        <span>*</span>-->
        <!--                        <p>送货到家</p>-->
        <!--                    </div>-->
        <!--                    <el-radio-group v-model="setting.logistics_type">-->
        <!--                        <el-radio :label="1">员工配送</el-radio>-->
        <!--                        <el-radio :label="2">第三方物流配送</el-radio>-->
        <!--                    </el-radio-group>-->
        <!--                </div>-->
        <!--                <div class="setItem">-->
        <!--                    <div class="setTitle">-->
        <!--                        <span>*</span>-->
        <!--                        <p>运费设置(元)</p>-->
        <!--                    </div>-->
        <!--                    <el-input v-model="setting.freight" placeholder="请输入金额"></el-input>-->
        <!--                </div>-->
        <!--                <div class="setItem">-->
        <!--                    <div class="setTitle">-->
        <!--                        <span>*</span>-->
        <!--                        <p>免运费活动(元)</p>-->
        <!--                    </div>-->
        <!--                    <el-input v-model="setting.free_freight" placeholder="请输入金额"></el-input>-->
        <!--                </div>-->
        <!--                <div class="setItem">-->
        <!--                    <div class="setTitle">-->
        <!--                        <span>*</span>-->
        <!--                        <p>最大配送距离(米)</p>-->
        <!--                    </div>-->
        <!--                    <el-input v-model="setting.delivery_distance" placeholder="请输入距离数"></el-input>-->
        <!--                </div>-->
        <!--                <div class="setItem">-->
        <!--                    <div class="setTitle">-->
        <!--                        <span>*</span>-->
        <!--                        <p>配送时间</p>-->
        <!--                    </div>-->
        <!--                    <el-tag>08:00:00 - 09:00:00</el-tag>-->
        <!--                </div>-->
        <!--            </div>-->
    </div>
</template>

<script>
    export default {
        name: "deliveryHome"
    }
</script>

<style scoped lang="less">
    .el-input{
        width: 20%;
    }
</style>