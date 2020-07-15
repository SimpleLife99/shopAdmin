<template>
  <div class="sidebar">
    <logo v-if="showlogo"></logo>
    <el-scrollbar>
      <el-menu
        :default-active="activeMenu"
        background-color="#32394c"
        text-color="#e6e7e9"
        active-text-color="#627fff"
        :collapse-transition="true"
        :unique-opened="false"
        :collapse="isCollapse"
        mode="vertical"
      >
        <sidebarItem
          v-for="route in permission_routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import logo from "./logo";
import sidebarItem from "./sidebarItem";

export default {
  name: "index",
  data () {
    return {
      showlogo: true
    }
  },
  components: { logo, sidebarItem },
  computed: {
    ...mapGetters(['permission_routes', 'isCollapse']),
    activeMenu () {
      const { path } = this.$route
      return path
    },
  },
  created () {
    console.log('路由', this.permission_routes)
    // this.permission_routes.forEach((itm, idx) => {
    //   if (idx == 0) {
    //     itm.hidden = false
    //     console.log(itm)
    //   }
    // })
  },
  methods: {}
}
</script>

<style scoped lang="less">
@import './../../../styles/pages/layout/index.less';
.el-menu,
.el-menu--inline {
  width: 100% !important;
  border: none !important;
}
</style>