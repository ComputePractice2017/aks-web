import Vue from 'vue'
import Router from 'vue-router'
import vopros from '@/components/vopros'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'vopros',
      component: vopros
    }
  ]
})
