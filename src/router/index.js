import Vue from 'vue'
import VueRouter from 'vue-router'
// import Gerentes from '../views/Gerentes.vue'
// import UserCreate from '../views/UserCreate.vue'
// import Home from '../views/Home.vue'
import Client from '../views/Client.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'Login',
      component: Login
    },

    {
      path: '/Client',
      name: 'Client',
      component: Client
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
]

const router = new VueRouter({
    routes
  })
  
export default router
