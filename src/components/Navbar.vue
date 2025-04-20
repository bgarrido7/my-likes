<script setup>
import { ref } from "vue";

const options = ref([
  { url: "/oscars", label: "Oscars 🏆" },
  { url: "/movies", label: "Movies" },
  { url: "/shows", label: "TV Shows" },
  { url: "/anime", label: "Animes" },
  { url: "/games", label: "Video Games" },
  { url: "/board-games", label: "Board Games" },
  { url: "/music", label: "Music" },
]);
</script>

<template>
  <nav>
    <ul>
      <div v-for="link in options">
        <router-link :to="link.url">
          <li :class="{ highlight: $route.path === link.url }">
            {{ link.label }}
          </li>
        </router-link>
      </div>
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

.highlight {
  background-color: #1f2c38;
}
</style>
