<template>
    <div class="nav_items">
        <div class="logo"><img :src="logoUrl"></div>
       <router-link to="/index"> <div :class="['nav_item',$route.meta.index==1?'nav_item_turn':'']">首页</div></router-link>
        <router-link to="/articles"> <div :class="['nav_item',$route.meta.index==2?'nav_item_turn':'']">文章</div></router-link>
        <router-link to="/leaveMessage"> <div :class="['nav_item',$route.meta.index==3?'nav_item_turn':'']">留言</div></router-link>
        <router-link to="/other"><div :class="['nav_item',$route.meta.index==4?'nav_item_turn':'']">其他</div></router-link>
          <div class="searchBox">
              <input type="search" placeholder="输入关键词">
              <div><img :src="searchIcon"></div>
          </div>
        <div v-show="isShow"><div style="color: #eeeeee">{{nickName}}</div><button @click="exit" style="height: 20px;font-size: 15px;line-height: 20px">退出</button></div>
    </div>
</template>

<script>
    export default {
        name: "nav_items",
        data(){
            return{
                logoUrl:require("../assets/logo.png"),
                searchIcon:require("../assets/search.png"),
                isShow:localStorage.getItem('token'),
                nickName:""
            }
        },
        methods:{
            exit:function () {
                localStorage.removeItem("token")
                localStorage.removeItem("id")
                location.reload()
            }
        },
        created() {
            if (this.isShow) {
                this.axios.get("/api/visitor/getVisitorById/"+localStorage.getItem("id")).then(
                    resp=>{
                        this.nickName=resp.data.data.nickName
                    }
                )
            }
        }


    }
</script>

<style scoped>
.nav_items {
    height: 46px;
    width: 100%;
}
.nav_item{
    color: #eeeeee;
    font-size: 18px;
    border-bottom: 4px solid white;
    float: left;
    width: 4%;
    height: 46px;
    margin-right: 28px;
    line-height: 46px;
    text-align: center;
}
.nav_item:hover{
    color: darkorange;
    transform: scale(1.1);
}
.nav_item_turn{
    color: darkorange;
}
.logo{
    float: left;
    width: 70px;
    height: 46px;
    margin-right: 30px;
}

    .logo img{
        width: 70px;
        height: 46px;
    }
    .searchBox{
        position: relative;
        float: right;
        height: 46px;
        line-height: 46px;
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
        top: 30%;
        right: 10px;
    }
    .searchBox img{
        width: 25px;
        height: 25px;
   }

</style>