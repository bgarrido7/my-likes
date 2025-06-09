<template>
  <div class="yuri-page">
    <div class="content">
      <n-card
        v-for="(yuri, key) in content"
        :key="key"
        :title="yuri.name"
        :segmented="{
          cover: true,
          footer: 'soft',
        }"
      >
        <template #cover>
          <img :src="yuri.cover" />
        </template>

        <div class="anime">
          <span v-if="yuri.anime">
            Anime:&nbsp;
            <a :href="yuri.anime" target="_blank"> MyAnimeList </a>
          </span>
        </div>

        <template #footer>
          <div class="description">
            <a :href="yuri.url" target="_blank">anime planet</a>
          </div>
        </template>
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
  grid-template-columns: repeat(auto-fill, minmax(12vw, auto));
  justify-content: start;
  gap: 1.5vw;
  padding: 2vw;
}

@media (max-width: 800px) {
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .n-card {
    width: 150px;
  }
}

.anime {
  flex: 1;
  display: flex;
  height: 100%;
  align-items: end;
}

.description {
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
}
</style>
