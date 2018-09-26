import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'
import Exam from './views/Exam'
import Results from './views/Results'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/exam',
      name: 'exam',
      component: Exam
    },
    {
      path: '/results',
      name: 'results',
      component: Results
    }
  ]
})
