import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/home/index.vue'

// createRouter 创建路由实例
const router = createRouter({
    history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
    routes: [
        {
            path: '/',
            component: ()=>import('/@/views/home/index.vue')
        }
    ]
})

// 抛出路由实例, 在 main.ts 中引用
export default router
