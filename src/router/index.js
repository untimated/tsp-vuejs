import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Greedy from '@/components/Greedy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/greedy',
      name: 'Greedy',
      component: Greedy
    }
  ]
})
