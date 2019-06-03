<template>
    <div class="results">
        <nav_bar></nav_bar>

        <div class="article_items">
            <div class="article_item" v-for="(item,index) in articles" :key="index" >
                <div class="article_title">
                    <div class="article_title_item"><router-link :to="{name:'articleDetails',params:{id:item.articleId}}">{{item.articleTitle}}</router-link></div>
                </div>

                <div class="article_time">
                    <div class="article_time_img"><img :src="clock"></div>
                    <div class="article_time_item">{{dateFormatToMinutes(new Date(item.articleTime))}}</div>
                </div>

                <div class="article_describe">
                    <div class="article_picture"><img :src="article_picture"></div>
                    <div class="article_introduce">{{item.articleDescribe}}</div>
                </div>

                <div class="article_details_bar">
                    <div class="article_details">
                        <div class="article_details_img"> <img :src="watch"></div>
                        <div class="article_details_item">{{item.readTimes}}</div>
                    </div>
                    <div class="article_details">
                        <div class="article_details_img"> <img :src="comment"></div>
                        <div class="article_details_item">{{item.commentTimes}}</div>
                    </div>
                    <div class="article_details">
                        <div class="article_details_img"><img :src="like"></div>
                        <div class="article_details_item">{{item.likeTimes}}</div>
                    </div>
                </div>


            </div>

        </div>
    </div>
</template>

<script>
    import nav_bar from "./nav_bar"
    import {dateFormat} from "@/static/jsUtils/dateFormat";
    export default {
        name: "searchResult",
        data(){
            return{
                articles:0,
                article_picture:require("@/assets/article_picture.png"),
                watch:require("@/assets/watch.png"),
                comment:require("@/assets/comment.png"),
                like:require("@/assets/like.png"),
                clock:require("@/assets/clock.png")
            }
        },
       methods:{
            dateFormatToMinutes:function (date) {
                return dateFormat(date)
            }
        },
        components:{
            nav_bar
        },
        created() {
            let way=this.$route.params.way
            let key= this.$route.params.key
            if (way=="tag"){
                this.axios.get("/api/article/getArticleByTag/"+key).then(
                    resp=>{
                        this.articles=resp.data.data
                    }
                )
            }

            if(way=="time"){
                this.axios.get("/api/article/getArticleByTime/"+key).then(
                    resp=>{
                        this.articles=resp.data.data
                    }
                )
            }
        }
    }
</script>

<style scoped>
    .results{
        width: 100%;
    }
    .article_items{
        width: 100%;
        margin-top: 20px;
    }
    .article_item{
        width: 98%;
        height: 150px;
        padding-left: 2%;
        padding-top: 15px;
        margin-bottom: 20px;
        background-color: #faf7f7;
        border-radius: 5px;
    }
    a{
        color: #16A085;
        font-size: 20px;
        font-weight: bold;
    }
    a:visited{
        color: #16A085;
    }
    .article_title{
        height: 25px;
        width: 100%;
    }
    a:hover{
        color: darkorange;
        transition: all 0.3s;
        padding-left: 20px;
    }
    .article_time{
        margin-top: 4px;
        width: 100%;
        height: 20px;
    }
    .article_time_img{
        width: 20px;
        float: left;
    }
    .article_time_img img{
        width: 20px;
    }
    .article_time_item{
        color: #646464;
        float: left;
        height: 20px;
        line-height: 20px;
    }
    .article_describe{
        width: 100%;
        height: 70px;
    }
    .article_picture{
        float: left;
        margin-left: -20px;
        width: 65px;

    }
    .article_picture img{
        width: 65px;
    }
    .article_introduce{
        float: left;
        color: #646464;
        font-size: 14px;
        font-weight: bold;
        padding-top: 15px;
        padding-left: 16px;
        height: 65px;
        width: 70%;
    }
    .article_details_bar{
        width: 100%;
        height: 20px;
        margin-top: 9px;
    }
    .article_details{
        color: #646464;
        float:right;
        margin-right: 10px;
        width: 50px;
        height: 20px;
    }
    .article_details_img{
        float: left;
    }
    .article_details img{
        width: 20px;
        height: 20px;
    }

    .article_details_item{
        float: left;
        margin-left: 5px;
        height: 20px;
        line-height: 20px;
    }
</style>