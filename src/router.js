import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home'
import  index from "./components/index"
import articles from "./components/articles"
import leaveMessage from "./components/LeaveMessage"
import article_details from "./components/article_details"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      component:home,
      redirect:"/index",
      children:[
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
        },
        {
          path:"article_details/:id",
          component:article_details,
          name:"articleDetails"
        }

      ]
    }
  ]
})
