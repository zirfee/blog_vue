<template>
    <div class="slide_nav">

    </div>
    
</template>

<script>
    export default {
        name: "slide_nav"
    }
</script>

<style scoped>
    .slide_nav{
        width: 5rem;
        height: 15rem;
        background-color: blueviolet;
        transition: width 0.3s ease-out;
    }
    .slide_nav:hover{
        width: 17rem;
    }
</style>