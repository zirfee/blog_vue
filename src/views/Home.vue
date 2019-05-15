<template>
  <div class="home">
    <slide_nav></slide_nav>

  </div>
</template>

<script>
  import slide_nav from "../components/slide_nav"

export default {
  name: 'home',
  data(){
    return {


    }
  },
  methods: {

  },
  components:{
      slide_nav
  }
}
</script>
<style scoped>
  .home{
    width: 100%;
    background-color: aqua;
  }

</style>