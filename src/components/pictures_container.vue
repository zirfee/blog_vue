<template>
    <div class="pictures_container">
        <ul>
           <li v-for="(item,index) in pictures" :key="index">
                 <img :src="item.src">
           </li>
        </ul>
    </div>

</template>

<script>
    export default {
        name: "pictures_container",
        data(){
            return{
                pictures:[
                    {src:require("../assets/1.jpg")},
                    {src:require("../assets/2.jpg")}
                ]
            }
        }
    }
</script>

<style scoped>
.pictures_container{
    width: 100%;
    overflow: hidden;
    height: 300px;
    background-color: cornflowerblue;
}

   ul{
       list-style: none;
       width: 500%;
       background-color: deeppink;
   }
   li{float: left;width: 20%}
   img{width: 100%;height: 300px}
</style>