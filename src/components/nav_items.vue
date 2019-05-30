<template>
    <div class="nav_items">
        <div class="nav_item"><img :src="logoUrl"></div>
        <div class="nav_item"><router-link to="/index">首页</router-link></div>
        <div class="nav_item"><router-link to="/articles">文章</router-link></div>
        <div class="nav_item"><router-link to="/leaveMessage">留言</router-link></div>
        <div class="nav_item"><router-link to="/article_details/2">测试</router-link></div>
          <div class="searchBox">
              <input type="search" placeholder="输入关键词">
              <div><img :src="searchIcon"></div>
          </div>
    </div>
</template>

<script>
    export default {
        name: "nav_items",
        data(){
            return{
                logoUrl:require("../assets/logo.png"),
                searchIcon:require("../assets/search.png")
            }
        }
    }
</script>

<style scoped>
.nav_items {
    height: 50px;
    width: 100%;
}
    .nav_item{
        float: left;
        width: 6%;
        height: 50px;
        margin-right: 20px;
        background-color: brown;
        line-height: 50px;
        text-align: center;
    }
    .nav_item img{
        width: 100%;
        height: 50px;
    }
    .searchBox{
        position: relative;
        background-color: brown;
        float: right;
        height: 50px;
        line-height: 50px;
    }

    .searchBox input{
        padding-left: 10px;
        width: 170px;
        height: 35px;
        border-radius: 20px;
        border: medium;
        transition: all 0.2s;
    }
    .searchBox input:focus{
        width:220px;
    }
    .searchBox div{
        position: absolute;
        top: 0;
        right: 10px;
    }
    .searchBox img{
        width: 25px;
        height: 25px;
   }

</style>