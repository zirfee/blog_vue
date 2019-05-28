<template>
    <div class="article_item">
         <router-link to="/article_details">{{title}}</router-link>
    </div>
</template>

<script>
    export default {
        name: "article_item",
        props:[
            "id",
            "title",
            "content"
        ]
    }
</script>

<style scoped>
.article_item{
    width: 100%;
}
</style>