<template>
    <div class="index">
        <div class="pictures_turn">
            <pictures_container></pictures_container>
        </div>
       <!-- <button @click="sub">124314</button>-->
        <div class="article_items">
             <article_item v-for="item in article_info" :title="item.title"  :id="item.id"></article_item>
        </div>


    </div>
</template>

<script>
    import pictures_container from "./pictures_container"
    import article_item from "./article_item"
    export default {
        name: "index",
        data(){
            return{
                article_info:null,
            }
        },
        components:{
            pictures_container,
            article_item
        },
        methods:{
             /*sub:function () {
                 let article={
                     articleTitle:"测试文章1",
                     articleContent:"这是文章1内容",
                     articleDescribe:"测试文章",
                     articleTags:["分类1"]
                 }
                 this.axios.post("/api/article/addArticle",article)
                     .then((response)=>(console.log(JSON.stringify(response.data))))
             }*/
        },
        created() {
            this.axios.get("/api/article/getAllArticlesProfile").then(resp=>console.log(JSON.stringify(resp.data.data)))
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
    .article_items{
        width: 100%;
        margin-top: 15px;
    }

</style>