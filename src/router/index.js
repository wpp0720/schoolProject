import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import topTeacher from '@/components/topTeacher'
import school from '@/components/school'
import shopping from '@/components/shopping'
import contactUS from '@/components/contactUS'
import teacherTeam from '@/components/teacherTeam'
import curriculaVariable from '@/components/curriculaVariable'
import proDetails from '@/components/proDetails'
import shopCart from '@/components/shopCart'


import PersonalIndex from '@/components/personal/PersonalIndex'
import like from '@/components/personal/like'
import orderDetails from '@/components/personal/orderDetails'
import myOrder from '@/components/personal/myOrder'
import setting from '@/components/personal/setting'
import myAddress from '@/components/personal/myAddress'
import addSite from '@/components/personal/addSite'
import myLogin from '@/components/personal/myLogin'
import modifyPass from '@/components/personal/modifyPass'
import myRegister from '@/components/personal/myRegister'

import coupon from '@/components/personal/coupon'


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
            path: '/shopCart',
            name: 'shopCart',
            component: shopCart
        },
        {
            path: '/proDetails',
            name: 'proDetails',
            component: proDetails
        },
        {
            path: '/shopping',
            name: 'shopping',
            component: shopping
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
        },
        {
            path: '/PersonalIndex',
            name: 'PersonalIndex',
            component: PersonalIndex
        },
        {
            path: '/like',
            name: 'like',
            component: like
        },
        {
            path: '/orderDetails',
            name: 'orderDetails',
            component: orderDetails
        },
        {
            path: '/myOrder',
            name: 'myOrder',
            component: myOrder
        },
        {
            path: '/setting',
            name: 'setting',
            component: setting
        },
        {
            path: '/myAddress',
            name: 'myAddress',
            component: myAddress
        },
        {
            path: '/addSite',
            name: 'addSite',
            component: addSite
        },

        {
            path: '/',
            name: 'myLogin',
            component: myLogin
        },
        {
            path: '/modifyPass',
            name: 'modifyPass',
            component: modifyPass
        },
        {
            path: '/myRegister',
            name: 'myRegister',
            component: myRegister
        },
        {
            path: '/coupon',
            name: 'coupon',
            component: coupon
        }
    ]
});
