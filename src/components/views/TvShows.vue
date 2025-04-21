<template>
  <div class="tv-shows-page">
    <div class="content">
      <n-card v-for="(show, key) in content" :key="key" :title="show.name">
        <template #cover>
          <img :src="show.cover" />
        </template>
        <div class="description">
          <a :href="show.url" target="_blank">IMDb</a>
        </div>
      </n-card>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { NCard } from "naive-ui";

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
  padding-bottom: 0;
  overflow-y: auto;
  max-height: 100%;
}

.content {
  display: grid;
  grid-template-columns: repeat(auto-fill, 1fr);
  grid-auto-flow: column;
  justify-content: start;
  gap: 1vw;
  padding: 2vw;
}

@media (max-width: 990px) {
  .content {
    display: flex;
    flex-wrap: wrap;
  }
  .n-card {
    width: 150px;
  }
}

.n-card {
  max-width: 250px;
}

.description {
  display: flex;
  align-items: end;
  justify-content: end;
  height: 100%;
}
</style>
