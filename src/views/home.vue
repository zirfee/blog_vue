<template>
    <div class="home">

        <div class="nav">
            <div class="nav_body"><nav_items></nav_items></div>
        </div>

        <div class="main">
            <div class="main_body">
              <div class="main_left"><keep-alive :include="['index']"><router-view :key="$route.path"></router-view></keep-alive></div>
              <div class="main_right"><slide_right></slide_right></div>           <!--  :key加上不同标识,参数变化依然刷新重绘-->
            </div>
        </div>

        <div class="bottom">
            <div class="bottom_body"><div>Powered By Vue </div></div>
        </div>

    </div>
</template>

<script>
import nav_items from "../components/nav_items"
import slide_right from "@/components/slide_right"
    export default {
        name: "home",
        data(){
            return{

            }
        },
        methods:{

        },
        components:{
            nav_items,
            slide_right
        }

    }
</script>

<style scoped>
    .home{

    }

.nav{
    position: fixed;
    z-index: 1;
    left: 0;
    top:0;
    width: 100%;
    background-color: rgba(0,0,0,0.9);
}
.nav_body{
    width: 86%;
    height: 50px;
    margin: 0 auto;
}
    .main{
        width: 100%;
        margin-top: 80px;
    }
    .main_body{
        overflow: hidden;
        width: 86%;
        margin: 0 auto;
        min-height: 1200px;
    }
    .main_left{
        float: left;
        width: 67%;
    }
    .main_right{
        float: right;
        width: 30%;
        height: 600px;
    }
    .bottom{
        margin-top: 70px;
        width: 100%;
        background-color:#2E3033;
    }
    .bottom_body{
        width: 90%;
        margin: 0 auto;
        height: 90px;
    }
.bottom_body div{
    color: #eeeeee;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    height: 90px;
    line-height: 90px;
    width: 200px;
    margin: 0 auto;
}
</style>