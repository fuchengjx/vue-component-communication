import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/A',
      name: 'A',
      component: () => import  ('../components/Achild'),
      meta: {
        keepAlive: true  // 需要缓存 通过keep-alive 保存该组件的状态
      }
    },
    {
      path: '/B',
      name: 'B',
      component: () => import('../components/Bchild'),
      meta: {
        keepAlive: true  // 需要缓存 通过keep-alive 保存该组件的状态
      }
    }
  ]
})
