<template>
    <div class="articles">
       <nav_bar></nav_bar>
        <div class="content">
           <div :class="['rotate','rotate'+deg]">
               <div class="item1" @click="add" ><img :src="p1"></div>
               <div class="item2"@click="add" ><img :src="p2"></div>
               <div class="item3"@click="add" ><img :src="p3"></div>
               <div class="item4"@click="add" ><img :src="p4"></div>
               <div class="item5"@click="add" ><img :src="p5"></div>
               <div class="item6"@click="add" ><img :src="p6"></div>
           </div>
        </div>

    </div>
</template>

<script>
    import nav_bar from "@/components/nav_bar"
    export default {
        name: "articles",
       data(){
            return{
                deg:1,
                pa:1,
                p1:require("@/assets/r1.jpg"),
                p2:require("@/assets/r2.jpg"),
                p3:require("@/assets/r3.jpg"),
                p4:require("@/assets/r4.jpg"),
                p5:require("@/assets/r5.jpg"),
                p6:require("@/assets/r6.jpg"),

            }
       } ,
        components:{
            nav_bar
        },
        methods:{
          add:function () {
              this.deg=this.deg+this.pa;
          }
        },
        watch:{
            deg:function(n,o) {
                  if(n>5){
                      this.pa=-1
                  }
                  if(n<2){
                      this.pa=1
                  }
            }
        }
    }
</script>

<style scoped>
.articles{
    width: 100%;
}
.content{
    background-color: #faf7f7;
    width: 100%;
    margin-top: 30px;
    perspective: 2000px; /* 设置观察者所在的地方*/
}
.rotate1{         /*舞台*/
    transform: rotateX(-20deg) rotateY(60deg);
 }
.rotate2{         /*舞台*/

    transform: rotateX(-20deg) rotateY(120deg);
}
.rotate3{         /*舞台*/
    transform: rotateX(-20deg) rotateY(180deg);
}
.rotate4{         /*舞台*/
    transform: rotateX(-20deg) rotateY(240deg);

}
.rotate5{         /*舞台*/
    transform: rotateX(-20deg) rotateY(320deg);
}
.rotate6{         /*舞台*/
    transform: rotateX(-20deg) rotateY(360deg);
}
.rotate{
    transform-style: preserve-3d; /*演员*/
    position: relative;
    top: 80px;
    left: 300px;
    width:200px;
    height: 500px;
    transition: all 0.5s;
}
.rotate div{
    position: absolute;
    height: 300px;
    width: 200px;

}
.rotate div img{
    height: 300px;
    width: 200px;
}

.item1{
        transform: rotateY(60deg) translateZ(180px);
    }
.item2{
    transform: rotateY(120deg) translateZ(180px);
}
.item3{
    transform: rotateY(180deg) translateZ(180px);
}
.item4{
      transform: rotateY(240deg)  translateZ(180px);
  }
.item5{
    transform: rotateY(300deg) translateZ(180px);
    }
.item6{
    transform: rotateY(360deg) translateZ(180px);
   }




</style>