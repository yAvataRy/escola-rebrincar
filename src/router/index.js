import { h, resolveComponent } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'
import Bercario from '@/views/paginas/Bercario.vue'
import Contato from '@/views/paginas/Contato.vue'
import Depoimentos from '@/views/paginas/Depoimentos.vue'
import Diferenciais from '@/views/paginas/Diferenciais.vue'
import Espaco from '@/views/paginas/Espaco.vue'
import Eventos from '@/views/paginas/Eventos.vue'
import Fundamental from '@/views/paginas/Fundamental.vue'
import Historia from '@/views/paginas/Historia.vue'
import Infantil from '@/views/paginas/Infantil.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        redirect: '/dashboard'
      },
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/Dashboard.vue'),
      },
      {
        path: 'bercario',
        name: 'Bercario',
        component: Bercario,
      },
      {
        path: 'contato',
        name: 'Contato',
        component: Contato,
      },
      {
        path: 'depoimentos',
        name: 'Depoimentos',
        component: Depoimentos,
      },
      {
        path: 'diferenciais',
        name: 'Diferenciais',
        component: Diferenciais,
      },
      {
        path: 'espaco',
        name: 'Espaco',
        component: Espaco,
      },
      {
        path: 'eventos',
        name: 'Eventos',
        component: Eventos,
      },
      {
        path: 'fundamental',
        name: 'Fundamental',
        component: Fundamental,
      },
      {
        path: 'historia',
        name: 'Historia',
        component: Historia,
      },
      {
        path: 'infantil',
        name: 'Infantil',
        component: Infantil,
      },
    ],
  },
  {
    path: '/pages',
    redirect: '/pages/404',
    name: 'Pages',
    component: {
      render() {
        return h(resolveComponent('router-view'))
      },
    },
    children: [
      {
        path: '404',
        name: 'Page404',
        component: () => import('@/views/pages/Page404'),
      },
      {
        path: '500',
        name: 'Page500',
        component: () => import('@/views/pages/Page500'),
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/pages/Login'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/views/pages/Register'),
      },
    ],
  },
]


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
