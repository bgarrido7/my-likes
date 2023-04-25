<template>
  <HelloWorld msg="my-navbar"/>
  <!-- <OscarsPredic msg="oscars"/> -->
  <UnderConstruct msg="construct"/>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'
import UnderConstruct from './components/UnderConstruct.vue'
// import OscarsPredic from './components/oscars/Oscars.vue'

export default {
  name: 'App',
  created () {
    document.title = "My Likes";
  },
  components: {
    HelloWorld,
    // OscarsPredic,
    UnderConstruct
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
}

#app{
  height: 100%;
  display: flex;
  flex-direction: row;
}

</style>
