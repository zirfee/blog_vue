<template>
    <div class="home">

        <div class="nav">
            <div class="nav_body"><nav_items></nav_items></div>
        </div>

        <div class="main">
            <div class="main_body">
              <div class="main_left"><router-view></router-view></div>
              <div class="main_right"></div>
            </div>
        </div>

        <div class="bottom">
            <div class="bottom_body"></div>
        </div>

    </div>
</template>

<script>
import nav_items from "../components/nav_items"
    export default {
        name: "home",
        data(){
            return{

            }
        },
        methods:{

        },
        components:{
            nav_items
        }

    }
</script>

<style scoped>

.nav{
    position: fixed;
    z-index: 1;
    left: 0;
    top:0;
    width: 100%;
    background-color: black;
}
.nav_body{
    width: 86%;
    height: 50px;
    margin: 0 auto;
    background-color: aqua;
}
    .main{
        width: 100%;
        margin-top: 80px;
    }
    .main_body{
        width: 86%;
        margin: 0 auto;
        height: 1000px;
        background-color: aquamarine;
    }
    .main_left{
        float: left;
        width: 67%;
        height: 700px;
        background-color: blue;
    }
    .main_right{
        float: right;
        width: 30%;
        height: 600px;
        background-color: deeppink;
    }
    .bottom{
        margin-top: 70px;
        width: 100%;
        background-color: brown;
    }
    .bottom_body{
        width: 90%;
        margin: 0 auto;
        height: 70px;
        background-color:coral;
    }
</style>