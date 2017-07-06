import Vue from 'vue'
import Router from 'vue-router'
import mainpage from '@/components/mainpage'
import vopros from '@/components/vopros'
import otvet from '@/components/otvet'
import VueResource from 'vue-resource'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/:vopros',
      name: 'vopros',
      component: vopros
    },
    {
      path: '/',
      name: 'mainpage',
      component: mainpage
    },
    {
      path: '/:vopros/:otvet',
      name: 'otvet',
      component: otvet
    }
  ]
})
