<template>
    <div class="pictures_container" @mouseover="clearTimer" @mouseout="setTimer">
        <transition name="fade" mode="in-out">
        <img  v-if="count===index" v-for="(item,index) in pictures" :key="index" :src="item">
        </transition>
        <div class="dots_container">
        <div class="dots_bar">
            <div v-for="(num,index) in this.pictures.length" :class="['dots',index===count?'dots_change':'']"  :key="index" @mouseover="count=index"></div>
        </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "pictures_container",
        data(){
            return{
                isShow:false,
                count:0,
                pictures:[
                    require("../assets/1.jpg"),
                    require("../assets/2.jpg"),
                    require("../assets/3.jpg"),
                    require("../assets/4.jpg"),
                    require("../assets/5.jpg")
                ],
                timer:null
            }
        },
        methods:{
            clearTimer:function () {
                clearInterval(this.timer)
            },
            setTimer:function () {
                this.timer=setInterval(() => (
                    this.count++
                ), 2500)
            }

        },
        watch:{
            count(newC,oldC){
               if (newC>this.pictures.length-1){
                   this.count=0
               }
            }
        },
        deactivated() {
            clearInterval(this.timer)
        },
        activated() {
            this.timer=setInterval(() => (
                this.count++
            ), 2500)
        }
        ,
        mounted() {
           /* this.timer=setInterval(() => (
                this.count++
            ), 2500)*/
        }
    }
</script>

<style scoped>
.pictures_container{
    position: relative;
    width: 100%;
    overflow: hidden;
    height: 250px;
    background-color: cornflowerblue;
}

   img{
       width: 100%;
       height: 250px;
       position: absolute;
       left: 0;
       top: 0;
      }
   .dots_container{
       position: absolute;
       width: 40%;
       left: 30%;
       bottom: 10%;
   }
   .dots_bar{
       width: 80%;
       margin: 0 auto;
   }
   .dots{
       width: 12px;
       height: 12px;
       border-radius: 5px;
       float: left;
       margin-right: 25px;
       background-color: #eeeeee;
       transition:all 0.5s;
   }
   .dots:hover{
       width: 25px;
       height: 10px;
       background-color: darkorange;
   }
   .dots_change{
       width: 25px;
       height: 10px;
       background-color: darkorange;
   }
    .fade-enter{
       opacity: 0;
    }
    .fade-enter-active{
        transition: opacity 1s;
    }
    .fade-enter-to{
        opacity: 1;
    }
    .fade-leave{
        opacity: 1;
    }
    .fade-leave-active{
        transition: opacity 1s;
    }
    .fade-leave-to{
        opacity: 0;
    }
</style>