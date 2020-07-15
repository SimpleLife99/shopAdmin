import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'

import './icons/iconfont' // 引入阿里图标
import './permission' //权限设置

  Vue.use(ElementUI,{ size: 'medium', zIndex: 3000 }); //设置element-ui的默认尺寸
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
