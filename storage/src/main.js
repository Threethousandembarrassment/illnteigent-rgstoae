// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
// 引入echarts
import echarts from 'echarts'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts 
Vue.use(ElementUI)

// import 'font-awesome/css/font-awesome.min.css';
// import 'font-awesome/css/font-awesome.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/element-ui/lib/theme-chalk/index.css';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
