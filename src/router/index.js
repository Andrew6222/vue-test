import Vue from 'vue'
import Router from 'vue-router'
import TableUser from '@/components/TableUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TableUser',
      component: TableUser
    }
  ]
})
