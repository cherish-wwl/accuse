import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: resolve => require(['../page/task/index.vue'], resolve),
        },
        {
            path: '/feedback',
            name: 'feedback',
            component: resolve => require(['../page/feedback/index.vue'], resolve),
        },
        {
            path: '/report',
            name: 'report',
            component: resolve => require(['../page/report/index.vue'], resolve),
        },
        {
            path: '/coinDetail',
            name: 'coinDetail',
            component: resolve => require(['../page/coinDetail/index.vue'], resolve),
        },
        {
            path: '/myFeedback',
            name: 'myFeedback',
            component: resolve => require(['../page/myFeedback/index.vue'], resolve),
        },
    ]
})