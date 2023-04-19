<template>
<nav>
  <ul>
    <li><a href="#Oscars">Oscars 🏆</a></li>
    <li><a href="#Movies">Movies</a></li>
    <li><a href="#Shows">Tv Shows</a></li>
    <li><a href="#Anime">Anime</a></li>
    <li><a href="#Games">Video Games</a></li>
    <li><a href="#Board">Board Games</a></li>
  </ul>
</nav>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

nav {
  background-color:#2c3e50;
  display: flex;
  flex-direction: row;
  text-align: center;

  height: 100%;
  overflow: hidden;
  width: 20vw;

}
ul {
  width: 100%;
  padding: 0;
  list-style: none;
}

li{
  padding: 3vh 0;
  width: 100%;
  margin: 3vh 0;
}
li:hover{
  background-color:#1f2c38;
  cursor: pointer;
}
a {
  color: white;
  text-decoration: none;
}

</style>
