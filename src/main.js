import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
import echarts from 'echarts'
import 'echarts-gl'

Vue.config.productionTip = false
Vue.use(ElementUI, { locale })
import './assets/css/common.scss'
import './assets/css/resetUi.scss'
import 'echarts/extension/bmap/bmap';
Vue.prototype.$echarts = echarts

import { ajax } from '@/utils/commonAjax'
Vue.prototype.$ajax = ajax

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
