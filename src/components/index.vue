<template>
    <div class="index">
        <div class="pictures_turn">
            <pictures_container></pictures_container>
        </div>
        <!--<button @click="sub">124314</button>-->
        <div class="myArticles">
             <article_items></article_items>
        </div>


    </div>
</template>

<script>
    import pictures_container from "./pictures_container"
    import article_items from "./article_items"
    export default {
        name: "index",
        data(){
            return{

            }
        },
        components:{
            pictures_container,
            article_items
        },
        methods:{
           /*  sub:function () {
                 let article={
                     articleTitle:"测试文章2",
                     articleContent:"这是文章2内容",
                     articleDescribe:"测试文章",
                     articleTags:["主题一","主题二"]
                 }
                 this.axios.post("/api/article/addArticle",article)
                     .then((response)=>(console.log(JSON.stringify(response.data))))
             }*/
        },
        created() {

           /* this.axios.get("/api/article/getArticle/2").then(resp=>console.log(JSON.stringify(resp.data.data)))*/
        }
    }
</script>

<style scoped>
.index{
    width: 100%;
    height: 500px;
    background-color:greenyellow;
}
    .pictures_turn{
        width: 100%;
    }
    .myArticles{
        width: 100%;
        margin-top: 15px;
    }

</style>