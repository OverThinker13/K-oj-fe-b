import { createRouter, createWebHistory } from 'vue-router'
import { getToken } from '@/utils/cookie'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/oj/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
    },
    {
      path: '/',
      redirect: '/oj/login',
    },
    {
      path: '/oj/layout',
      name: 'layout',
      component: () => import('@/views/Layout.vue'),
      children: [
        {
          // 子路由使用相对路径，自动拼接为 /oj/layout/cuser
          path: 'cuser',
          name: 'cuser',
          component: () => import('@/views/Cuser.vue'),
        },
        {
          path: 'question',
          name: 'question',
          component: () => import('@/views/Question.vue'),
        },
        {
          path: 'exam',
          name: 'exam',
          component: () => import('@/views/Exam.vue'),
        },
      ]
    },
  ],
})

// Vue Router 的全局前置守卫，用于检查登录状态
// 如果用户已登录，且尝试访问登录页，重定向到后台页面
// 如果用户未登录，且尝试访问非登录页，重定向到登录页
router.beforeEach((to, from, next) => {
  if (getToken()) {  // 已经登录过（有 token）
    if (to.path === '/oj/login') {
      // 如果已登录还想访问登录页，自动跳转到首页
      next({ path: '/oj/layout' })
    } else {
      // 已登录，正常访问其他页面
      next()
    }
  } else {
    // 未登录（没有 token）
    if (to.path !== '/oj/login') {
      // 未登录想访问需要权限的页面，强制跳转到登录页
      next({ path: '/oj/login' })
    } else {
      // 未登录访问登录页，正常放行
      next()
    }
  }
})

export default router

