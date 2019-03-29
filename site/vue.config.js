// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/AlumniPsiUFMG' : '/',
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ],
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