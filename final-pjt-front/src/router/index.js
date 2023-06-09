import Vue from 'vue'
import VueRouter from 'vue-router'

import MainView from '@/views/MainView'
import MovieView from '@/views/MovieView'
import LoginView from '@/views/LoginView'
import DetailView from '@/views/DetailView'
import SignupView from '@/views/SignupView'
import ProfileView from '@/views/ProfileView'
import SelectionView from '@/views/SelectionView'
import SearchView from '@/views/SearchView'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/movie',
    name: 'movie',
    component: MovieView
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/selection',
    name: 'selection',
    component: SelectionView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/:movie_id',
    name: 'detail',
    component: DetailView
  },
  {
    path: '/profile/:username',
    name: 'profile',
    component: ProfileView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
}
})

export default router

