// vue.config.js
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/AlumniPsiUFMG' : '/',
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ],
  configureWebpack: {
    plugins: [
        new PrerenderSPAPlugin({
            staticDir: path.join(__dirname, './dist'),
            routes: [
              '/',
              '/conheca',
              '/redes/artigos',
              '/redes/artigos-fruchterman',
              '/redes/area-concentracao',
              '/redes/area-concentracao-force-atlas-2',
              '/redes/completa',
              '/redes/orientacoes',
              '/redes/orientando-terceiros',
              '/dados',
              '/downloads',
              '/artigos',
              '/resultados',
              '/dados/script-lattes',
              '/dados/publicacoes',
              '/dados/orientacoes'
            ],
        })
    ],
  },
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `@import "@/assets/variaveis.scss";`
      }
    }
  }
}
