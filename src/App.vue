<template>
  <HelloWorld msg="my-navbar"/>
  <MyPage msg="my-page"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyPage from './components/MyPage.vue'

export default {
  name: 'App',
  created () {
    document.title = "My Likes";
  },
  components: {
    HelloWorld,
    MyPage
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
