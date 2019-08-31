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
      component: () => import(/* webpackChunkName: "redes" */ './views/redes/Artigos.vue')
    },
    {
      path: '/redes/artigos-fruchterman',
      name: 'artigos-fruchterman',
      // route level code-splitting
      // this generates a separate chunk (artigos-fruchtermans.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "artigos-fruchtermans" */ './views/redes/ArtigosFruchterman.vue')
    },
    {
      path: '/redes/area-concentracao',
      name: 'rede-por-area-concentracao',
      // route level code-splitting
      // this generates a separate chunk (redes.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "redes" */ './views/redes/AreaConcentracao.vue')
    },
    {
      path: '/redes/area-concentracao-force-atlas-2',
      name: 'rede-por-area-concentracao-force-atlas-2',
      // route level code-splitting
      // this generates a separate chunk (redes.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "redes" */ './views/redes/AreaConcentracaoForceAtlas2.vue')
    },
    {
      path: '/redes/completa',
      name: 'rede-completa',
      // route level code-splitting
      // this generates a separate chunk (redes.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "completa" */ './views/redes/Completa.vue')
    },
    {
      path: '/redes/orientacoes',
      name: 'rede-orientacoes',
      // route level code-splitting
      // this generates a separate chunk (redes.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "redes" */ './views/redes/Orientacao.vue')
    },
    {
      path: '/redes/orientando-terceiros',
      name: 'rede-orientando-terceiros',
      // route level code-splitting
      // this generates a separate chunk (redes.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "redes" */ './views/redes/OrientandoTerceiros.vue')
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
      path: '/downloads',
      name: 'downloads',
      // route level code-splitting
      // this generates a separate chunk (publicacoes.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "downloads" */ './views/Downloads.vue')
    },
    {
      path: '/artigos',
      name: 'artigos',
      // route level code-splitting
      // this generates a separate chunk (publicacoes.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "artigos" */ './views/Artigos.vue')
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
      path: '/dados/script-lattes',
      name: 'script-lattes',
      // route level code-splitting
      // this generates a separate chunk (publicacoes.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "script-lattes" */ './views/ScriptLattes.vue')
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
