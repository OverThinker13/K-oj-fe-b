import { createRouter, createWebHistory } from 'vue-router'
import { getToken } from '@/utils/cookie'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/oj/login',
      name: 'login',
      component: () => import('@/views/Login.vue')
    },
    {
      path:"/",
      redirect:'/oj/login',
    },
    {
      path: '/oj/layout',
      name: 'layout',
      component: () => import('@/views/Layout.vue'),
      children: [
        {
          path: 'question',
          name: 'question',
          component: () => import('@/views/Question.vue')
        },
        {
          path: 'exam',
          name: 'exam',
          component: () => import('@/views/Exam.vue')
        },
        {
          path: 'updateExam',
          name: 'updateExam',
          component: () => import('@/views/UpdateExam.vue')
        },
        {
          path: 'cuser',
          name: 'cuser',
          component: () => import('@/views/Cuser.vue')
        }
      ]
    }
  ]
})

router.beforeEach((to, from) => {
  const hasToken = getToken()
  
  // 如果已登录且访问登录页，重定向到首页
  if (hasToken && to.path === '/oj/login') {
    return { path: '/oj/layout/question' }
  }
  
  // 如果未登录且访问非登录页，重定向到登录页
  if (!hasToken && to.path !== '/oj/login') {
    return { path: '/oj/login' }
  }
  
  // 其他情况允许通行
  return true
})

export default router


