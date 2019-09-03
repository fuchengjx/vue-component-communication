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
      component: () => import  ('../components/Achild')
    },
    {
      path: '/B',
      name: 'B',
      component: () => import('../components/Bchild')
    }
  ]
})
