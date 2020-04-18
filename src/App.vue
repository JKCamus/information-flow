<template>
  <div id="app">
    <nav-bar class="home-nav" >
      <div slot="center">Info</div>
    </nav-bar>
    <router-view></router-view>

  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'

  import information from 'views/information'
  export default {
    name: 'App',
    components: {
      NavBar,
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: rgb(16, 132, 255);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
</style>