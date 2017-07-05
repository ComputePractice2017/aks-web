import Vue from 'vue'
import Router from 'vue-router'
import otvet from '@/components/otvet'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'otvet',
      component: otvet
    }
  ]
})
