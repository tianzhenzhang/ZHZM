// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import index from './index.vue'
import router from './router'
import 'common/css/reset.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#index',
    router,
    render: h => h(index)
})
