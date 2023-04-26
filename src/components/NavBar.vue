<template>
  <nav>
    <ul>
      <router-link to="/oscars">
        <li>Oscars 🏆</li>
      </router-link>
      <router-link to="/movies">
        <li>Movies</li>
      </router-link>
      <router-link to="/shows">
        <li>Tv Shows</li>
      </router-link>
      <router-link to="/anime">
        <li>Anime</li>
      </router-link>
      <router-link to="/games">
        <li>Video Games</li>
      </router-link>
      <router-link to="/board">
        <li>Board Games</li>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  background-color: #2c3e50;
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

li {
  padding: 3vh 0;
  width: 100%;
  margin: 3vh 0;
  color: white;
  text-decoration: none;
}

li:hover {
  background-color: #1f2c38;
  cursor: pointer;
}

a {
  color: white;
  text-decoration: none;
}
</style>
