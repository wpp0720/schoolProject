import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'


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
      path: '/index/:id',
      name: 'Hello',
      component: Hello
    }
  ]
});
