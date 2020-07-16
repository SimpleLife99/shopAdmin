<template>
  <div class="deliveryOrder">
    <div class="searchArea">
      <div class="inputArea">
        <div class="inputBox">
          <p>账户名称</p>
          <el-input
            v-model="searchMsg.order_sn"
            placeholder="请输入内容"
          ></el-input>
        </div>
        <div class="operationArea">
          <el-button
            class="searchBtn"
            type="primary"
          >搜索</el-button>
        </div>
        <div class="operationArea new-btn">
          <el-button
            class="searchBtn"
            icon="el-icon-circle-plus"
            type="success"
          >添加员工</el-button>
        </div>
      </div>

    </div>
    <div class="orderList">
      <el-table
        :data="orderList"
        size="medium"
        :header-cell-style="{background: '#f2f5ff'}"
        style="width: 100%"
      >
        <el-table-column
          align="center"
          prop="order_sn"
          label="ID"
          width="100"
        />
        <el-table-column
          align="center"
          prop="company"
          label="账户名"
          width="280"
        />
        <el-table-column
          align="center"
          prop="company"
          label="员工姓名"
          width="200"
        />
        <el-table-column
          align="center"
          prop="money"
          label="所属角色"
          width="160"
        />
        <el-table-column
          align="center"
          prop="shop"
          label="所属门店"
        />
        <el-table-column
          align="center"
          prop="addtime"
          label="加入时间"
        />
        <el-table-column
          align="center"
          prop="order_status"
          label="状态"
          width="160"
        />
        <el-table-column
          align="center"
          label="操作"
        >
          <el-button type="primary">编辑</el-button>
          <el-button type="danger">删除</el-button>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          background
          @current-change="changeCurrent"
          @prev-click="prevPage"
          @next-click="nextPage"
          layout="prev, pager, next"
          :total="20"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "deliveryOrder",
  data () {
    return {
      searchMsg: {
        order_sn: '',
        order_status: '',
        time: {
          start: '',
          end: ''
        },
        pay_status: ''
      },
      payStatus: [{ value: 1, label: '未支付' }, { value: 2, label: '已支付' }],
      orderList: [
        { order_sn: '20', money: '0.02', order_status: '退款成功', delivery_status: '未创建物流订单', company: '达达', shop: '望江花园', phone: '15684590097', note: '留言', addtime: '2020-05-28 15:07:26' },
        { order_sn: '21', money: '0.02', order_status: '退款成功', delivery_status: '未创建物流订单', company: '达达', shop: '望江花园', phone: '15684590097', note: '留言', addtime: '2020-05-28 15:07:26' },
        { order_sn: '22', money: '0.02', order_status: '退款成功', delivery_status: '未创建物流订单', company: '达达', shop: '望江花园', phone: '15684590097', note: '留言', addtime: '2020-05-28 15:07:26' },
      ]
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    /* 分页方法 */
    changeCurrent (val) {
      console.log('当前页', val)
    },
    prevPage (val) {
      console.log('上一页', val)
    },
    nextPage (val) {
      console.log('下一页', val)
    }
  }
}
</script>

<style scoped lang="less">
@import './../../styles/pages/commission/rule';
</style>