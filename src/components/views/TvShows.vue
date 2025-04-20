<template>
  <div class="tv-shows-page">
    <h2 class="title">tv shows</h2>
    <div class="content">
      <ul v-for="(show, key) in content" :key="key">
        <li>
          {{ show.name }}
          <img :src="show.cover" alt="cover" />
          <a :href="show.url" target="_blank">see link</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const jsonUrl = `${import.meta.env.BASE_URL}data/shows.json`;
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
.tv-shows-page {
  padding: 1vw;
}

.title {
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
  padding: 0;
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
