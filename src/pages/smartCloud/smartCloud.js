import Vue from 'vue'
import App from './smartCloud.vue'
import router from './router'
import {
  Dialog,
  Button
  // MessageBox,
  // Alert,
  // Message
} from 'element-ui'
// 引入echarts
import echarts from 'echarts'
// import 'common/css/element-variables.scss'
import 'element-ui/lib/theme-chalk/index.css'

import 'common/css/index.scss'

Vue.prototype.$echarts = echarts
Vue.use(Dialog)
Vue.use(Button)
// Vue.use(Alert)
// Vue.use(Message)
// Vue.prototype.$message = Message
// Vue.prototype.$alert = MessageBox.alert
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
