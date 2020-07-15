<template>
  <div class="sendSetting">
    <div class="setContent">
      <div class="setContainer">
        <div class="line-box">
          <div class="line-left">
            <span style="color:#FF3300">*</span> 佣金名称
          </div>
          <div class="line-right">
            <el-input
              v-model="input"
              placeholder="请输入内容"
            ></el-input>
            <div>前端展示名称，如“金豆”，“福豆”等</div>
          </div>

        </div>
        <span class="break"></span>
        <div class="line-box">
          <div class="line-left">
            <span style="color:#FF3300">*</span>
            与现金的价值比
          </div>
          <div
            class="line-right"
            style="width:38%"
          >
            <div style="font-size:12px;color:#666">
              <el-input
                style="width:79%"
                v-model="input"
                placeholder="请输入内容"
              ></el-input>个佣金=1元
            </div>
            <div>请输入1元对应的佣金数量，默认为“10”</div>
          </div>
          <div class="line-right"></div>
        </div>
        <span class="break"></span>
        <div class="line-box">
          <div class="line-left">
            <span style="color:#FF3300">*</span>
            可抵扣的实付金额比例
          </div>
          <div
            class="line-right"
            style="width:70%"
          >
            <div style="font-size:12px;color:#666">
              <el-input
                style="width:43%"
                v-model="input"
                placeholder="请输入内容"
              ></el-input>%
            </div>
            <div>请输入您希望的佣金抵扣比例，默认100%，例如：设置的比例为：“20%”；订单实付金额为100元，用户在付款时，最多只能使用佣金抵扣20元，其余必须使用真实金额支付</div>
          </div>
        </div>
      </div>
      <el-button
        type="primary"
        size='medium'
      >设置</el-button>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentTab: 1,

    }
  },
  components: {},
  created () {
  },
  mounted () {
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
    },
    saveSetting () {
      console.log(this.setting)
    }
  }
}
</script>

<style scoped lang="less">
@import './../../styles/pages/commission/setUp';
</style>