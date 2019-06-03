<template>
    <div class="slide_right">
        <div class="slide_item_title"><div class="title">关于本站</div></div>
        <div class="slide_item_content"><div class="content"><p>&nbsp&nbsp&nbsp本站是用于知识分享的个人博客, 技术栈为vue全家桶, nodeJs环境, html, css, js, axios, 后端为spring全家桶, 数据库采用 mysql. 实现文章发布及评论分享, 并设置留言功能. 源码在<a href="https://github.com/zirfee/blog_vue.git">github</a></p></div></div>
        <div class=" slide_item_title"><div class="title">推荐</div></div>
        <div class="slide_item_content"><div  class="content recommend" v-for="(item,index) in articles_info" :key="index" ><router-link :to="{name:'articleDetails',params:{id:item.articleId}}">{{index+1}}:&nbsp&nbsp&nbsp&nbsp{{item.articleTitle}}</router-link></div></div>
        <div class=" slide_item_title"><div class="title">标签</div></div>
        <div class="slide_item_content"><div class="tags"><div class="tag" :style="'backgroundColor: #'+colors[index]" v-for="(item,index) in this.tags" :key="index"><router-link :to="{name:'articleResult',params:{way:'tag',key:item.tagTitle}}">{{item.tagTitle}}</router-link></div></div></div>
        <div class=" slide_item_title" ><div class="title">时间轴</div></div>
        <div class="slide_item_content"><div class="content"><div class="time_item" v-for="(item,index) in time" :key="index"><router-link :to="{name:'articleResult',params:{way:'time',key:item[0]}}">{{item[0].slice(0,4)}}年{{item[0].slice(4,6)}}月({{item[1]}})</router-link></div> </div></div>
    </div>
</template>

<script>
    export default {
        name: "slide_right",
        data(){
            return{
                articles_info:0,
                tags:0,
                time:[],
                colors:['CC6699','336666','663300','9BBFEA','CCCC00','EA6F5A','31194D0','42C02E']
            }
        },
        created() {
            this.axios.get("/api/article/getRecommend").then(
                resp => {
                    this.articles_info = resp.data.data
                })
            this.axios.get("/api/tag/getAllTags").then(
                resp => {
                    this.tags = resp.data.data
                   /* console.log(JSON.stringify(resp.data.data))*/
                })
            this.axios.get("/api/article/getArticlesTime").then(
                resp=>{
                    this.time=resp.data.data
                    console.log(JSON.stringify(resp.data.data))
                }
            )
        }
    }
</script>

<style scoped>
    .slide_right{
        width: 100%;
        padding-top: 11px;
        background-color: #faf7f7;
    }
   .slide_item_title{
       width: 100%;
       margin-bottom: 10px;
       background-color:#2E3033;
       height: 40px;
   }
    .title{
       width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #eeeeee;
        font-size: 20px;
    }
    .slide_item_content{
        width: 100%;
        margin-bottom: 10px;
    }
    .content{
        width: 92%;
        padding-left: 4%;
        padding-right: 4%;
        color: #404040;
        font-size: 12px;
    }
    .content p{
        line-height: 2;
    }
    .content a{
        font-size: 14px;
        color: #16A085;
        font-weight: bold;
    }
    .content a:visited{
        color: #16A085;
    }
   .recommend{
    border-bottom: 0.5px solid #ccc;
       padding-top: 5px;
      padding-bottom: 5px;
       padding-left: 10px;
   }
   .tags{
       width: 92%;
       padding-left: 4%;
       padding-right: 4%;
       min-height: 110px;
   }
    .tag{
        color: #eeeeee;
        float: left;
        margin-right: 20px;
        line-height: 30px;
        border-radius: 4px;
        padding: 3px 8px;
        margin-bottom: 10px;
    }
    .tag a{
        color: #eeeeee;
    }
    .tag a:visited{
        color: #eeeeee;
    }
    .time_item{
        padding-bottom: 8px;
        text-align: center;
        border-bottom: 0.5px solid #ccc;
    }
    .time_item a{
        font-size: 19px;
    }

</style>