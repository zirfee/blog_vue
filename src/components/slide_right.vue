<template>
    <div class="slide_right">
        <div class="slide_item_title"><div class="title">关于本站</div></div>
        <div class="slide_item_content"><div><p>本站是用于知识分享的个人博客,技术栈为vue全家桶,nodeJs环境,html,css,js,,axios,后端为spring全家桶,数据库采用mysql.实现文章发布及评论分享,并设置留言功能.源码在<a href="">github</a></p></div></div>
        <div class=" slide_item_title"><div class="title">推荐</div></div>
        <div class="slide_item_content">gw</div>
        <div class=" slide_item_title"><div class="title">标签</div></div>
        <div class="slide_item_content">gw</div>
        <div class=" slide_item_title" ><div class="title">时间轴</div></div>
        <div class="slide_item_content">gw</div>
    </div>
</template>

<script>
    export default {
        name: "slide_right"
    }
</script>

<style scoped>
    .slide_right{
        width: 96%;
        padding-top: 11px;
        padding-left: 2%;
        padding-right: 2%;
        background-color: #faf7f7;
        height: 600px;
    }
   .slide_item_title{
       width: 100%;
       background-color:#2E3033;
       height: 40px;
   }
    .title{
       width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #eeeeee;
        font-size: 18px;
    }
    .slide_item_content{
        width: 100%;
    }


</style>