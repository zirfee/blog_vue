<template>
    <div class="leaveMessage">
        <nav_bar></nav_bar>

    </div>
</template>

<script>
    import nav_bar from "@/components/nav_bar"
    export default {
        name: "LeaveMessage",
    data(){
            return{

            }
    },
        components:{
            nav_bar
        }
    }
</script>

<style scoped>
.leaveMessage {
    width: 100%;
}

</style>