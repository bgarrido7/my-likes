<template>
  <div class="movies-page">
    <h2>movies</h2>

    <div class="content">
      <ul v-for="(movie, key) in content" :key="key">
        <li>
          <span class="title">
            {{ movie.name }}
          </span>

          <img :src="movie.cover" alt="cover" />

          <div class="footer">
            {{ movie.year }}
            <a :href="movie.url" target="_blank">see link</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const jsonUrl = `${import.meta.env.BASE_URL}data/movies.json`;
const content = ref([]);

onMounted(async () => {
  try {
    const res = await fetch(jsonUrl);
    if (!res.ok) throw new Error("Failed to load data");
    const jsonData = await res.json();
    content.value = jsonData.content;
  } catch (error) {
    console.error("Error loading JSON data:", error);
  }
});
</script>

<style scoped>
.movies-page {
  padding: 1vw;
  padding-bottom: 0;
  overflow-y: auto;
  max-height: 100%;
}
h2 {
  text-transform: capitalize;
}

.content {
  display: flex;
  flex-wrap: wrap;
  gap: 2vw;
  padding: 2vw;
}

ul {
  list-style: none;
  padding: 0.5vh 1vw;
  display: flex;
  background-color: rgb(236, 231, 231);
  border-radius: 4px;
}

li {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.title {
  width: 200px;
  text-align: center;
  font-size: large;
}

.footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

img {
  width: 200px;
  height: auto;
}

a {
  align-self: end;
}

a:link,
a:visited {
  color: rgb(71, 71, 205);
}
</style>
