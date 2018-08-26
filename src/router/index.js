import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'


Vue.use(Router)

export default new Router({
 mode: 'history',
  routes: [
    // {
    //   path: '/index/:sessionId',
    //   name: 'beginAuction', 
    //   component: beginAuction
    // },
    {
      path: '/index',
      name: 'index',
      component: Index
    }
  ]
});
