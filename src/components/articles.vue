<template>
    <div class="articles">
       <nav_bar></nav_bar>
        <div class="content">
            <div style="color: #16A085;font-size: 19px">类别:&nbsp{{tags.length}}</div>
            <div class="arrow arrow_left" @click="add"><img :src="arrow"></div>
            <div class="arrow arrow_right" @click="add"><img :src="arrow"></div>
           <div :class="['rotate','rotate'+deg]">
               <!--<div class="item1" @click="add" ><img :src="p1"><div class="link"><router-link :to="{name:'articleResult',params:{way:'tag',key:tags[0].tagTitle}}">{{tags[0].tagTitle}}</router-link></div></div>
               <div class="item2"@click="add" ><img :src="p2"><div class="link"></div></div>
               <div class="item3"@click="add" ><img :src="p3"><div class="link"></div></div>
               <div class="item4"@click="add" ><img :src="p4"><div class="link"></div></div>
               <div class="item5"@click="add" ><img :src="p5"><div class="link"></div></div>
               <div class="item6"@click="add" ><img :src="p6"><div class="link"></div></div>-->
               <div  :class="['item'+index]" @click="add" v-for="(item,index) in tags">
                   <img :src="pictures[index]">
                   <div class="link">
                       <router-link :to="{name:'articleResult',params:{way:'tag',key:tags[index].tagTitle}}">{{index+1+":"+tags[index].tagTitle}}</router-link>
                   </div>
               </div>
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
                tags:0,
                arrow:require("@/assets/arrow.png"),
                pictures:[require("@/assets/r0.jpg"),require("@/assets/r1.jpg"),require("@/assets/r2.jpg"),require("@/assets/r3.jpg"),require("@/assets/r4.jpg"),require("@/assets/r5.jpg")],
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
        },
        created() {
            this.axios.get("/api/tag/getAllTags").then(
                resp => {
                    this.tags = resp.data.data
                    /* console.log(JSON.stringify(resp.data.data))*/
                })
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
    transform: rotateX(-20deg) rotateY(-60deg);
 }
.rotate2{         /*舞台*/

    transform: rotateX(-20deg) rotateY(-120deg);
}
.rotate3{         /*舞台*/
    transform: rotateX(-20deg) rotateY(-180deg);
}
.rotate4{         /*舞台*/
    transform: rotateX(-20deg) rotateY(-240deg);

}
.rotate5{         /*舞台*/
    transform: rotateX(-20deg) rotateY(-300deg);
}
.rotate6{         /*舞台*/
    transform: rotateX(-20deg) rotateY(-360deg);
}
.rotate{
    transform-style: preserve-3d; /*演员*/
    position: relative;
    top: 80px;
    left: 270px;
    width:200px;
    height: 500px;
    transition: all 0.5s;
   /* transform: rotateX(-20deg) rotateY(-60deg);*/
}
.rotate>div{
    position: absolute;
    height: 300px;
    width: 200px;
}
.rotate div img{
    height: 300px;
    width: 200px;
}

.item0{
        transform: rotateY(60deg) translateZ(180px);
    }
.item1{
    transform: rotateY(120deg) translateZ(180px);
}
.item2{
    transform: rotateY(180deg) translateZ(180px);
}
.item3{
      transform: rotateY(240deg)  translateZ(180px);
  }
.item4{
    transform: rotateY(300deg) translateZ(180px);
    }
.item5{
    transform: rotateY(360deg) translateZ(180px);
   }
.link{
    height: 30px;
    position: absolute;
    top: 45%;
    left: 30%;
}
.link a{
    font-size: 24px;
    color: #eeeeee;
    font-weight:bold;
 }
.arrow{
    position: absolute;
    width: 60px;
    height: 60px;
}
.arrow img{
    width: 60px;
    height: 60px;
}
    .arrow_left{
        left: 20px;
        top: 40%;
        transform: rotate(180deg);
    }
    .arrow_left:hover{
        transform: rotate(180deg) scale(1.1);
    }
.arrow_right{
    right: 20px;
    top: 40%;
}
    .arrow_right:hover{
        transform: scale(1.1);
    }
</style>