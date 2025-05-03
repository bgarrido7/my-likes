<template>
  <div class="music-page">
    <div class="filter">
      Category:
      <n-radio-group v-model:value="selectedFilter">
        <n-radio-button value="kpop">K-pop</n-radio-button>
        <n-radio-button value="rock">Rock</n-radio-button>
        <n-radio-button value="indie">Indie</n-radio-button>
      </n-radio-group>
    </div>
    <div class="content">
      <n-card
        v-for="(album, key) in filteredData"
        :key="key"
        :title="album.name"
        :segmented="{
          cover: true,
          footer: 'soft',
        }"
      >
        <template #cover>
          <img :src="album.cover" />
        </template>
        <template />
        <template #footer>
          <div class="description">
            <span>{{ album.artist }}</span>
            <div class="footer">
              <span>{{ album.year }}</span>
              <a :href="album.url" target="_blank">Spotify</a>
            </div>
          </div>
        </template>
      </n-card>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { NCard, NRadioButton, NRadioGroup } from "naive-ui";

const jsonUrl = `${import.meta.env.BASE_URL}data/music.json`;
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
.music-page {
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

.filter {
  display: flex;
  align-items: center;
  gap: 1vw;
  font-size: small;
}
</style>
