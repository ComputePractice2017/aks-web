import Vue from 'vue'
import Router from 'vue-router'
import mainpage from '@/components/mainpage'
import vopros from '@/components/vopros'
import otvet from '@/components/otvet'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/vopros',
      name: 'vopros',
      component: vopros
    },
    {
      path: '/',
      name: 'mainpage',
      component: mainpage
    },
    {
      path: '/otvet',
      name: 'otvet',
      component: otvet
    }
  ]
})
