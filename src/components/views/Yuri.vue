<template>
  <div class="yuri-page">
    <div class="content">
      <n-card v-for="(yuri, key) in content" :key="key" :title="yuri.name">
        <template #cover>
          <img :src="yuri.cover" />
        </template>
        <div class="description">
          <a :href="yuri.url" target="_blank">anime planet</a>
        </div>
        <div v-if="yuri.anime">
          Anime:
          <a :href="yuri.anime" target="_blank"> MyAnimeList </a>
        </div>
      </n-card>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { NCard } from "naive-ui";

const jsonUrl = `${import.meta.env.BASE_URL}data/yuri.json`;
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
.yuri-page {
  padding: 1vw;
  padding-bottom: 0;
  overflow-y: auto;
  max-height: 100vh;
}

.content {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(11vw, auto));
  justify-content: start;
  gap: 1.5vw;
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

.description {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: end;
  align-items: end;
}
</style>
