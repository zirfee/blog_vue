<template>
    <div class="article_details">
        <div class="nav">
            <ul>
                <li>当前位置:</li>
                <li><router-link to="/index">首页</router-link>-></li>
                <li><router-link to="/articles">文章</router-link>-></li>
                <li><router-link to="#">{{this.title}}</router-link></li>
            </ul>
        </div>

        <div class="article">
            <div class="title">{{title}}</div>
            <div class="tags"><div><img :src="tag"></div><div>{{tags}}</div></div>
            <div class="bar">
                <div class="time"><div><img :src="clock"></div><div>{{time}}</div><div>发布</div></div>
                <div class="details">
                    <div><img :src="watch"></div>
                    <div>{{readTimes}}</div>
                    <div>次阅读</div>
                    <div><img :src="comment"></div>
                    <div>{{commentTimes}}</div>
                    <div>条评论</div>
                    <div><img :src="like"></div>
                    <div>{{likeTimes}}</div>
                    <div>点赞</div>
                </div>
            </div>
            <div class="content"  v-highlightjs>
               <md></md>
                <!--  v-highlightjs标记的盒子代码高亮-->
                <!-- <code class="javascript"></code>--><!--代码放里面高亮-->
            </div>
        </div>
    </div>
</template>

<script>
    import {dateFormat} from "@/static/jsUtils/dateFormat";
    import md from '@/static/md/docs/test.md'
    import 'highlight.js/styles/atom-one-dark.css'
    export default {
        name: "article_details",
        data(){
            return{
                title:"",
                tags:"",
                time:"",
                readTimes:"",
                commentTimes:"",
                likeTimes:"",
                articleContent:"",
                tag:require("@/assets/tag.png"),
                watch:require("@/assets/watch.png"),
                comment:require("@/assets/comment.png"),
                like:require("@/assets/like.png"),
                clock:require("@/assets/clock.png"),
            }
        },
        components:{
           md
        },
        methods:{
          dateFormat
        },
        created() {
           let path= "/api/article/getArticle/"+this.$route.params.id
            this.axios.get(path).then(
                resp=> {
                    let article=resp.data.data
                    this.title=article.articleTitle
                    article.tags.forEach(item => this.tags+=item.tagTitle+" ")
                    this.time=dateFormat(new Date(article.articleTime))
                    this.readTimes=article.readTimes
                    this.commentTimes=article.commentTimes
                    this.likeTimes=article.likeTimes
                    this.articleContent=article.articleContent

                }
            )
        }
    }
</script>

<style scoped>
.article_details{
    width: 100%;
}
.nav{
    padding-left: 1%;
    width: 99%;
    height: 35px;
    background-color: #faf7f7;
}
.nav li{
    height: 35px;
    line-height: 35px;
    float: left;
}
    .nav a{
        color: #16A085;
    }
   .nav a:visited{
    color: #16A085;
   }
    .nav a:hover{
        color: darkorange;
    }
    .article{
        padding-top: 30px;
        padding-bottom: 30px;
        margin-top: 15px;
        width: 98%;
        padding-left: 1%;
        background-color: #faf7f7;
    }
    .article img{
        width: 14px;
    }
    .title{
        width: 100%;
        font-size: 21px;
        font-weight: bold;
        color: #16A085;
    }
    .tags{
        color: #404040;
        font-size: 12px;
        margin-top: 15px;
        width: 100%;
        height: 23px;
    }
    .tags div{
        height: 23px;
        line-height: 23px;
        float:left
    }
    .bar{
        color: #404040;
        font-size: 12px;
        width: 100%;
        height: 23px;
    }
    .time{
        height: 23px;
        float: left;
    }
   .time div{
       float: left;
       height: 23px;
       line-height: 23px;
   }
    .details{
        height: 23px;
        float: right;
    }
    .details div{
        height: 23px;
        line-height: 23px;
        float: left;
        margin-right: 5px;
    }
    .content{
        width: 100%;
        font:400 16px/20px Arial,Helvetica,Tahoma,\\534E\6587\7EC6\9ED1,Microsoft YaHei,\\5FAE\8F6F\96C5\9ED1,sans-serif;
        color: #404040;
        margin-top: 20px;
        border-top: 1px solid #ccc;
        padding-top: 20px;
        font-size: 14px;
    }
</style>