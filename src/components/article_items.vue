<template>
    <div class="article_items">

        <div class="article_item" v-for="(item,index) in articles_info" :key="index" >
            <router-link :to="{name:'articleDetails',params:{id:item.articleId}}">{{item.articleId}}</router-link>
        </div>

    </div>
</template>

<script>
    export default {
        name: "article_item",
       data(){
            return{
                articles_info:null,
            }
       },
        created() {
            this.axios.get("/api/article/getAllArticlesProfile").then(resp=> {
                this.articles_info = resp.data.data
                resp.data.data
                console.log(JSON.stringify(resp.data.data))
            })
        }
    }
</script>

<style scoped>
    .article_items{
        width: 100%;
    }
.article_item{
    width: 100%;
}
</style>