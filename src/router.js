import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home'
import  index from "./components/index"
import articles from "./components/articles"
import leaveMessage from "./components/LeaveMessage"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      component:home,
      children:[
        {
          path: "",
          component: index
        },
        {
          path: "index",
          component: index
        },
        {
          path:"articles",
          component:articles
        },
        {
          path:"leaveMessage",
          component:leaveMessage
        }

      ]
    }
  ]
})
