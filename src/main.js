import Vue from 'vue'
import App from './App'

//路由插件
import router from "./router";

//UI插件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//配置
Vue.config.productionTip = false

//插件
Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
