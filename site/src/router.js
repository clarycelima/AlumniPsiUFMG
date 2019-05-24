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
      path: '/redes/artigos',
      name: 'rede-artigos',
      // route level code-splitting
      // this generates a separate chunk (redes.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "redes" */ './views/RedeArtigos.vue')
    },
    {
      path: '/redes/por-area-concentracao',
      name: 'rede-por-area-concentracao',
      // route level code-splitting
      // this generates a separate chunk (redes.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "redes" */ './views/RedeAreaConcentracao.vue')
    },
    {
      path: '/redes/orientacoes',
      name: 'rede-orientacoes',
      // route level code-splitting
      // this generates a separate chunk (redes.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "redes" */ './views/RedeOrientacoes.vue')
    },
    {
      path: '/redes/decorrente-orientacao',
      name: 'rede-decorrente-orientacao',
      // route level code-splitting
      // this generates a separate chunk (redes.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "redes" */ './views/RedeDecorrenteOrientacao.vue')
    },
    {
      path: '/dados',
      name: 'dados',
      // route level code-splitting
      // this generates a separate chunk (publicacoes.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "dados" */ './views/Dados.vue')
    },
    {
      path: '/resultados',
      name: 'resultados',
      // route level code-splitting
      // this generates a separate chunk (publicacoes.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "dados" */ './views/Resultados.vue')
    },
    {
      path: '/dados/publicacoes',
      name: 'publicacoes',
      // route level code-splitting
      // this generates a separate chunk (publicacoes.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "publicacoes" */ './views/Publicacoes.vue')
    },
    {
      path: '/dados/orientacoes',
      name: 'orientacoes',
      // route level code-splitting
      // this generates a separate chunk (orirentacoes.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "orirentacoes" */ './views/Orientacoes.vue')
    }
  ]
})
