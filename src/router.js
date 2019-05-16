import Vue from 'vue'
import Router from 'vue-router'
import Layout from './views/layout/Layout'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'DataIndex',
      redirect: 'dataIndex',
      component: Layout,
      children: [
        {
          path: 'dataIndex',
          component: () => import('./views/dataIndex/index')
        }
      ]
    },
    {
      path: '/dataIndex2',
      name: 'DataIndex2',
      redirect: '/dataIndex2/index',
      component: Layout,
      children: [
        {
          path: 'index',
          component: () => import('./views/dataIndex2/index')
        }
      ]
    },
  ]
})
