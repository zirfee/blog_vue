import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home'
import  index from "./components/index"
import articles from "./components/articles"
import leaveMessage from "./components/LeaveMessage"
import article_details from "./components/article_details"
import other from "./components/other"
import searchResult from "./components/searchResult"
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
          component: index,
          meta:{
            index:1
          }
        },
        {
          path:"articles",
          component:articles,
          meta:{
            index:2
          }
        },
        {
          path:"leaveMessage",
          component:leaveMessage,
          meta:{
            index:3
          }
        },
        {
          path:"other",
          component:other,
          meta:{
            index:4
          }
        },
        {
          path:"article_details/:id",
          component:article_details,
          name:"articleDetails",
          meta:{
            index:2,
            index2:1
          }
        },
        {
          path:"search/:way/:key",
          component:searchResult,
          name:"articleResult",
          meta:{
            index:2,
            index2:2
          }
        }

      ]
    }
  ]
})
