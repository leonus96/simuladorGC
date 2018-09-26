import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'
import Exam from './views/Exam'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/exam',
      component: Exam
    }
  ]
})
