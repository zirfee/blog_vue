import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import VueAxios from 'vue-axios'
import VueHighlightJS from 'vue-highlightjs'
Vue.use(VueHighlightJS)
Vue.use(VueAxios,axios)
Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
/*
<component :is="assembly"></component>*/
//动态切换组件