// @ts-ignore
import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/home/index.vue'

// createRouter 创建路由实例
const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: '/',
      component: () => import('@/views/layout/index.vue'),
      name: 'Layout',
      redirect: '/home',
      meta: {
        title: '首页',
        keepAlive: false
      },
      children: [
        {
          path: '/home',
          name: 'Home',
          component: () => import('@/views/home/index.vue')
        },
        {
          path: '/explore',
          name: 'Explore',
          component: () => import('@/views/explore/index.vue')
        },
        {
          path: '/message',
          name: 'Message',
          component: () => import('@/views/message/index.vue')
        },
        {
          path: '/myCenter',
          name: 'MyCenter',
          component: () => import('@/views/myCenter/index.vue')
        }
      ]
    }
  ]
})

// 抛出路由实例, 在 main.ts 中引用
export default router
