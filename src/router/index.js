import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from "../views/Dashboard";
import Projects from "../views/Projects"
import Team from "../views/Team"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Dashboard
  },
  {
    path: '/projects',
    name: 'projects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Projects.vue')
    }
  },
    {
        path: '/team',
        name: 'team',
        component: Team
    },

]

const router = new VueRouter({
  routes
})

export default router
