<template>
  <div class="games-page">
    <div class="content">
      <n-card v-for="(game, key) in content" :key="key" :title="game.name">
        <template #cover>
          <img :src="game.cover" />
        </template>
        <div class="description">
          <span>{{ game.platform }}</span>
          <div class="footer">
            <span>{{ game.year }}</span>
            <a :href="game.url" target="_blank">Gamespot</a>
          </div>
        </div>
      </n-card>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { NCard } from "naive-ui";

const jsonUrl = `${import.meta.env.BASE_URL}data/video-games.json`;
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
.games-page {
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
  justify-content: end;
  flex-direction: column;
  height: 100%;
}

.footer {
  display: flex;
  align-items: end;
  justify-content: space-between;
}
</style>
