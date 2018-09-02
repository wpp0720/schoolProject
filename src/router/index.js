import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import topTeacher from '@/components/topTeacher'
import school from '@/components/school'
import contactUS from '@/components/contactUS'
import teacherTeam from '@/components/teacherTeam'
import curriculaVariable from '@/components/curriculaVariable'


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
    },
    {
      path: '/topTeacher',
      name: 'topTeacher',
      component: topTeacher
    },
    {
      path: '/school',
      name: 'school',
      component: school
    },
    {
      path: '/contactUS',
      name: 'contactUS',
      component: contactUS
    },
    {
      path: '/teacherTeam',
      name: 'teacherTeam',
      component: teacherTeam
    },
    {
      path: '/curriculaVariable',
      name: 'curriculaVariable',
      component: curriculaVariable
    }
  ]
});
