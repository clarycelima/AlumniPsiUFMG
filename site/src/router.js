import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/conheca',
      name: 'conheca',
      // route level code-splitting
      // this generates a separate chunk (sobre.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "sobre" */ './views/Sobre.vue')
    },
    {
      path: '/redes',
      name: 'redes',
      // route level code-splitting
      // this generates a separate chunk (redes.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "redes" */ './views/Redes.vue')
    },
    {
      path: '/publicacoes',
      name: 'publicacoes',
      // route level code-splitting
      // this generates a separate chunk (publicacoes.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "publicacoes" */ './views/Orientacoes.vue')
    },
    {
      path: '/orientacoes',
      name: 'orientacoes',
      // route level code-splitting
      // this generates a separate chunk (orirentacoes.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "orirentacoes" */ './views/Orientacoes.vue')
    }
  ]
})
