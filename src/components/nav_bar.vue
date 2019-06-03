<template>
    <div class="nav">
        <ul>
            <li>当前位置:</li>
            <li><router-link to="/index">首页</router-link>-></li>
            <li v-if="this.$route.meta.index==2"><router-link to="/articles">文章</router-link></li>
            <li v-if="this.$route.meta.index==3"><router-link to="/leaveMessage">留言</router-link></li>
            <li v-if="this.$route.meta.index==4"><router-link to="/other">其他</router-link></li>
            <li v-if="this.$route.meta.index==2 && this.$route.meta.index2==1">-><router-link to="#">阅读文章</router-link></li>
            <li v-if="this.$route.meta.index==2 && this.$route.meta.index2==2">-><router-link to="#">搜索结果</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "nav_bar",

    }
</script>

<style scoped>
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
</style>