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
        { path: 'cuser', name: 'cuser', component: () => import('@/views/Cuser.vue') },
        { path: 'question', name: 'question', component: () => import('@/views/Question.vue') },
        { path: 'exam', name: 'exam', component: () => import('@/views/Exam.vue') },
      ]
    },
  ],
})

// ✅ Vue Router 4.x 新写法：使用 return 代替 next()
router.beforeEach((to, from) => {
  const hasToken = getToken()
  
  // 已登录状态
  if (hasToken) {
    if (to.path === '/oj/login') {
      // 已登录访问登录页 → 重定向到首页
      return { path: '/oj/layout/question' }
    }
    // 已登录访问其他页面 → 放行
    return true
  }
  
  // 未登录状态
  if (to.path !== '/oj/login') {
    // 未登录访问需要权限的页面 → 跳转到登录页
    return { path: '/oj/login' }
  }
  // 未登录访问登录页 → 放行
  return true
})

export default router