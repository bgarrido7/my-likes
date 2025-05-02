<template>
  <div class="animes-page">
    <div class="filter">
      <n-radio-group v-model:value="selectedFilter">
        <n-radio-button value="anime">Anime</n-radio-button>
        <n-radio-button value="manga">Manga</n-radio-button>
      </n-radio-group>
    </div>
    <div class="content">
      <n-card
        v-for="(anime, key) in filteredData"
        :key="key"
        :title="anime.name"
      >
        <template #cover>
          <img :src="anime.cover" />
        </template>
        <div class="description">
          <a :href="anime.url" target="_blank">{{
            anime.category === "anime" ? "IMDb" : "anime planet"
          }}</a>
        </div>
      </n-card>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { NCard, NRadioButton, NRadioGroup } from "naive-ui";

const jsonUrl = `${import.meta.env.BASE_URL}data/animes.json`;
const content = ref([]);
const selectedFilter = ref("");

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

const filteredData = computed(() => {
  if (!selectedFilter.value) return content.value;

  return content.value.filter((item) => item.category === selectedFilter.value);
});
</script>

<style scoped>
.animes-page {
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
  align-items: end;
  justify-content: end;
  height: 100%;
}
</style>
