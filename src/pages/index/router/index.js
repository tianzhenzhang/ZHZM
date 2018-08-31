import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login/login'
import forget1 from '../components/forget/forget1'
import forget2 from '../components/forget/forget2'
import forget3 from '../components/forget/forget3'
import forget4 from '../components/forget/forget4'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'login',
            component: login
        },
        {
            path: '/forget1',
            name: 'forget1',
            component: forget1
        },
        {
            path: '/forget2',
            name: 'forget2',
            component: forget2
        },
        {
            path: '/forget3',
            name: 'forget3',
            component: forget3
        },
        {
            path: '/forget4',
            name: 'forget4',
            component: forget4
        }
    ]
})
