<template>
    <div class="article_details">
      {{this.article.articleContent}}
    </div>
</template>

<script>
    export default {
        name: "article_details",
        data(){
            return{
                article:1
            }
        },
        mounted() {

        },
        created() {
           let path= "/api/article/getArticle/"+this.$route.params.id
            this.axios.get(path).then(resp=> this.article=resp.data.data)
        }
    }
</script>

<style scoped>
.article_details{
    width: 100%;
    background-color: indigo;
}
</style>