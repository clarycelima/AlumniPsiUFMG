import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ECharts from 'vue-echarts'

// import ECharts modules manually to reduce bundle size
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/polar'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'

import 'echarts/lib/chart/graph'
import 'echarts/lib/chart/tree'

import '@/assets/site.scss'
import 'bootstrap';

Vue.config.productionTip = false
Vue.component('v-chart', ECharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
