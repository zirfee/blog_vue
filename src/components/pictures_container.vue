<template>
    <div class="pictures_container">
        <transition name="fade" mode="in-out">
        <img v-if="count===index" v-for="(item,index) in pictures" :key="index" :src="item">
        </transition>
    </div>

</template>

<script>
    export default {
        name: "pictures_container",
        data(){
            return{
                count:0,
                pictures:[
                    require("../assets/1.jpg"),
                    require("../assets/2.jpg")
                ]

            }
        },
        methods:{


        },
        watch:{
            count(newC,oldC){
               if (newC>1){
                   this.count=0
               }
            }
        },
        mounted() {
         setInterval(()=>(
             this.count++
         ),2000)
        }
    }
</script>

<style scoped>
.pictures_container{
    position: relative;
    width: 100%;
    overflow: hidden;
    height: 300px;
    background-color: cornflowerblue;
}

   img{
       width: 100%;
       height: 300px;
       position: absolute;
       left: 0;
       top: 0;
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