import Vue from 'vue'
import VueRouter from 'vue-router'
import Acasa from '../components/Acasa.vue'
import Client from '../components/Client.vue'
import Login from "../components/Login";
import Restaurante from "../components/Restaurante";
import Rezervari from "../components/Rezervari";
import ProdusePage1 from "../components/ProdusePage1";
import LoginRestaurant from "../components/LoginRestaurant";
import Restaurant from "../components/Restaurant";
import Produse from "../components/Produse";
import Home from "../components/Home";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Acasa',
    component: Acasa
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/client',
    component: Client
  },
  {
    path: '/login',
    name:"Login",
    component: Login
  },
  {
    path: '/restaurante',
    component: Restaurante
  },
  {
    path: '/rezervari',
    component: Rezervari
  },
  {
    path: '/produse_page_1',
    component: ProdusePage1
  },
  {
    path: '/login_restaurant',
    name:"LoginRestaurant",
    component: LoginRestaurant
  },
  {
    path: '/restaurant',
    component: Restaurant
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/produse',
    component: Produse
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
