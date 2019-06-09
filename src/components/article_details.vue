<template>
    <div class="article_details">
       <!-- <div class="nav">
            <ul>
                <li>当前位置:</li>
                <li><router-link to="/index">首页</router-link>-></li>
                <li><router-link to="/articles">文章</router-link>-></li>
                <li><router-link to="#">{{this.title}}</router-link></li>
            </ul>
        </div>-->
       <nav_bar></nav_bar>
        <div class="article">
            <div class="title">{{title}}</div>
            <div class="tags"><div><img :src="tag"></div><div>{{tags}}</div></div>
            <div class="bar">
                <div class="time"><div><img :src="clock"></div><div>{{time}}</div><div>发布</div></div>
                <div class="details">
                    <div><img :src="watch"></div>
                    <div>{{readTimes}}</div>
                    <div>次阅读</div>
                    <div><img :src="commentPic"></div>
                    <div>{{commentTimes}}</div>
                    <div>条评论</div>
                    <div><img :src="like"></div>
                    <div>{{likeTimes}}</div>
                    <div>点赞</div>
                </div>
            </div>
            <div class="content"  v-highlightjs>
               <comment :is="who"></comment>
                <!--  v-highlightjs标记的盒子代码高亮-->
                <!-- <code class="javascript"></code>--><!--代码放里面高亮-->
            </div>
            <div class="like" @click="change()">
                <div v-if="!isLike"><img :src="this.heart" ></div>
                <div v-if="isLike"><img :src="this.heart_filled" ></div>
                <div>喜欢</div>
            </div>
        </div>
        <div class="comment">
            <login v-show="isShow" @changeIsShow="changeIs"></login>
            <div class="leave">
                <div class="t">我要评论:</div>
                <div class="textArea"><textarea v-model="comment_content" @focus="checkIsLogin"></textarea></div>
                <div class="submit"><div class="emoji"><img :src="smile"></div><button @click="submit">提交</button></div>
            </div>
           <comment :key="this.add"></comment>
        </div>
    </div>
</template>

<script>
    import {dateFormat} from "@/static/jsUtils/dateFormat";
    import note2 from '@/static/md/docs/note2.md'
    import note1 from '@/static/md/docs/note1.md'
    import 'highlight.js/styles/atom-one-dark.css'
    import nav_bar from "./nav_bar"
    import login from "@/components/login"
    import comment  from "@/components/commentItem"
    export default {
        name: "article_details",
        data(){
            return{
                who:"",
                add:0,
                isShow:false,
                isLike:false,
                articleId:"",
                title:"",
                tags:"",
                time:"",
                readTimes:"",
                commentTimes:"",
                likeTimes:"",
                articleContent:"",
                comment_content:"",
                tag:require("@/assets/tag.png"),
                watch:require("@/assets/watch.png"),
                commentPic:require("@/assets/comment.png"),
                like:require("@/assets/like.png"),
                heart:require("@/assets/heart.png"),
                heart_filled:require("@/assets/heart_filled.png"),
                smile:require("@/assets/smile.png"),
                clock:require("@/assets/clock.png")
            }
        },
        components:{
            "note1":note1,
           "note2":note2,
            nav_bar,
            login,
            comment
        },
        methods:{
          dateFormat,
            change:function () {
                this.isLike=true
                this.axios.get("/api/article/addArticleLikeTimes?articleId="+this.$route.params.id)
            },
            submit:function () {
              if(localStorage.getItem("id")) {
                  let content = this.comment_content
                  let jsonOb = new Object()
                  jsonOb.content = content
                  this.axios.defaults.headers.common['token'] = localStorage.getItem('token')
                  this.axios.post("/api/comment/addComment?articleId=" + this.$route.params.id + "&visitorId=" + localStorage.getItem("id"), jsonOb).then(
                      resp => {
                          this.axios.get("/api/article/addArticleCommentTimes?articleId="+this.$route.params.id)
                         this.add++
                      }
                  )
              }else {
                  this.isShow=true
              }
            },
            changeIs:function () {
                this.isShow=!this.isShow
            },
            checkIsLogin:function () {
                if(!localStorage.token){
                    this.isShow=true
                }
            }
        },
        created() {
           let path= "/api/article/getArticle/"+this.$route.params.id
            this.who="note"+this.$route.params.id
            this.axios.get(path).then(
                resp=> {
                    let article=resp.data.data
                    this.articleId=article.articleId
                    this.title=article.articleTitle
                    article.tags.forEach(item => this.tags+=item.tagTitle+" ")
                    this.time=dateFormat(new Date(article.articleTime))
                    this.readTimes=article.readTimes
                    this.commentTimes=article.commentTimes
                    this.likeTimes=article.likeTimes
                    this.articleContent=article.articleContent

                }
            )
            this.axios.get("/api/article/addArticleReadTimes?articleId="+this.$route.params.id)

        }
    }
</script>

<style scoped>
.article_details{
    width: 100%;
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
        letter-spacing: 1px;
        font:400 16px/20px Arial,Helvetica,Tahoma,\\534E\6587\7EC6\9ED1,Microsoft YaHei,\\5FAE\8F6F\96C5\9ED1,sans-serif;
        color: #404040;
        margin-top: 20px;
        border-top: 1px solid #ccc;
        padding-top: 20px;
        font-size: 14px;
        margin-bottom: 30px;

    }

    .like{
        width: 30%;
         margin: 0 auto;
        transition: all 0.5s;
    }
    .like div{
        font-size: 16px;
        margin-left: 35%;

    }
    .like:hover{
      transform: translateY(-10px);
    }
    .like img{
        width: 30px;
        height: 30px;
    }
    .comment{
        margin-top: 20px;
        width: 94%;
        background-color: #faf7f7;
        padding: 3%;
    }
.t2{
    width: 100%;
    color: #462C2C;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
    text-align: center;
}
.leave{
    margin-top: 40px;
    height: 200px;
}
.t{
    color: #462C2C;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
}

.textArea{
    width: 100%;
}
.textArea textarea{
    font-family: STFangsong;
    resize: none;
    outline: none;
    font-size: 14px;
    padding: 5px;
    border: none;
    border-radius: 6px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    height: 100px;
    -webkit-box-shadow: 0 0 8px rgba(0,0,0,.4);
    box-shadow: 0 0 8px rgba(0,0,0,.4);
    -webkit-appearance: textarea;
    background-color: white;
    -webkit-rtl-ordering: logical;
    flex-direction: column;
    cursor: text;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    ext-rendering: auto;
    color: initial;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    font: 400 13.3333px Arial;
}
.submit{
    width: 100%;
}
.emoji{
    float: left;
}
.emoji img{
    width: 25px;
    height: 25px;
}
.submit button{
    float: right;
    width: 60px;
    height: 30px;
    background-color: #5BC0DE;
    border-radius: 5px;
    border: 0px;
    text-align: center;
    color: #eeeeee;
}

</style>