<template>
    <div class="nav_items">
        <div class="nav_item"><router-link to="/index">首页</router-link></div>
        <div class="nav_item"><router-link to="/articles">文章</router-link></div>
        <div class="nav_item"><router-link to="/leaveMessage">留言</router-link></div>
        <div class="nav_item"><router-link to="/articles">其他</router-link></div>
    </div>
</template>

<script>
    export default {
        name: "nav_items"
    }
</script>

<style scoped>
.nav_items {
    height: 50px;
    width: 100%;
}
    .nav_item{
        float: left;
        width: 50px;
        height: 50px;
        margin-left: 20px;
        background-color: brown;
        line-height: 50px;
        text-align: center;
    }


</style>