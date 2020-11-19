import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Client from '../views/Client.vue'
import Dashboard from '../views/Dashboard.vue'
import Project from '../views/Project.vue'
import Settings from '../views/Settings.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/home',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: '/clientes',
        name: 'Clientes',
        component: Client
      },
      {
        path: '/projetos',
        name: 'Projetos',
        component: Project
      },
      {
        path: '/configuracao',
        name: 'Configuracao',
        component: Settings
      },
    ]
  },
]

const router = new VueRouter({
    mode: 'history',
    routes
  })
  
export default router
