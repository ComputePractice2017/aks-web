import Vue from 'vue'
import Router from 'vue-router'
import mainpage from '@/components/mainpage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainpage',
      component: mainpage
    }
  ]
})
