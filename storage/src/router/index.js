import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import ICcard from '@/components/ICcard/ICcard'
import login from '@/components/login/login'
import empty from '@/components/empty/empty'
import functionManagement from '@/components/functionManagement/functionManagement'
import weighTask from '@/components/weighTask/weighTask'
import poundRecord from '@/components/poundRecord/poundRecord'
import hardWareControl from '@/components/hardWareControl/hardWareControl'
import manualWeigh from '@/components/manualWeigh/manualWeigh'
import componentDetection from '@/components/componentDetection/componentDetection'
import authorityManagement from '@/components/authorityManagement/authorityManagement'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: home
    }, {
      path: '/ICcard',
      name: 'ICcard',
      component: ICcard
    }, {
      path: '/login',
      name: 'login',
      component: login
    }, {
      path: '/empty',
      name: 'empty',
      component: empty
    }, {
      path: '/functionManagement',
      name: 'functionManagement',
      component: functionManagement
    },{
      path: '/weighTask',
      name: 'weighTask',
      component: weighTask
    },{
      path: '/poundRecord',
      name: 'poundRecord',
      component: poundRecord
    },{
      path: '/hardWareControl',
      name: 'hardWareControl',
      component: hardWareControl
    },{
      path: '/manualWeigh',
      name: 'manualWeigh',
      component: manualWeigh
    },{
      path: '/componentDetection',
      name: 'componentDetection',
      component: componentDetection
    },{
      path: '/authorityManagement',
      name: 'authorityManagement',
      component: authorityManagement
    },
  ]
})
