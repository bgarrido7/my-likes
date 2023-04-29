<template>

<NavBar msg="my-navbar"/>
  <router-view/>
</template>

<script>

import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  created () {
    document.title = "My Likes";
  },
  components: {
    NavBar
  },
}
</script>

<style>

html{
  height: 100%;
}

body{
  margin:0;
  height: 100%;
  font-family: 'Courier New', Courier, monospace;  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #fcfbfc;
}

#app{
  height: 100%;
  display: flex;
  flex-direction: row;
}

</style>
