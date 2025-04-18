<script setup>
import { ref } from "vue";
</script>

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
      <router-link to="/board-games">
        <li>Board Games</li>
      </router-link>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background-color: #2c3e50;
  display: flex;
  flex-direction: row;
  text-align: center;

  height: 100vh;
  overflow: hidden;
  width: 180px;
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
