<template>
    <div class="index">
     <pictures_container></pictures_container>
    </div>
</template>

<script>
    import pictures_container from "./pictures_container"
    export default {
        name: "index",
        components:{
            pictures_container
        }
    }
</script>

<style scoped>
.index{
    width: 100%;
    height: 500px;
    background-color:greenyellow;
}
</style>