<template>
  <div class="movies-page">
    <div class="sorting">
      Sort by:
      <n-radio-group v-model:value="selectedSorting" @click="triggerSorting">
        <n-radio-button value="name">Name</n-radio-button>
        <n-radio-button value="year">Year</n-radio-button>
      </n-radio-group>

      <n-icon v-if="!isSorted" size="18" :component="ArrowSort16Regular" />
      <n-icon
        v-else
        size="18"
        class="sort-icon"
        :component="ArrowSortDownLines16Regular"
        @click="updateSortOrder"
        :style="{ transform: 'rotate(' + rotationAngle + 'deg)' }"
      />
    </div>

    <div class="content">
      <n-card v-for="(movie, key) in sortedData" :key="key" :title="movie.name">
        <template #cover>
          <img :src="movie.cover" />
        </template>
        <div class="description">
          {{ movie.year }}
          <a :href="movie.url" target="_blank">IMDb</a>
        </div>
      </n-card>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { NCard, NRadioButton, NRadioGroup, NIcon } from "naive-ui";
import {
  ArrowSort16Regular,
  ArrowSortDownLines16Regular,
} from "@vicons/fluent";

const jsonUrl = `${import.meta.env.BASE_URL}data/movies.json`;
const content = ref([]);

const selectedSorting = ref("");
const sortOrder = ref("asc");
const isSorted = ref(false);
const rotationAngle = ref(0);

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

const sortedData = computed(() => {
  if (selectedSorting.value === "name")
    if (sortOrder.value === "asc")
      return content.value.sort((a, b) => a.name.localeCompare(b.name));
    else return content.value.sort((a, b) => b.name.localeCompare(a.name));
  else if (selectedSorting.value === "year")
    if (sortOrder.value === "asc")
      return content.value.sort((a, b) => b.year - a.year);
    else return content.value.sort((a, b) => a.year - b.year);
  else return content.value;
});

function updateSortOrder() {
  if (!selectedSorting.value) return;
  else if (sortOrder.value === "asc") {
    sortOrder.value = "desc";
    rotationAngle.value = 180;
  } else {
    sortOrder.value = "asc";
    rotationAngle.value = 0;
  }
}

function triggerSorting() {
  sortOrder.value = "asc";
  rotationAngle.value = 0;
  isSorted.value = true;
}
</script>

<style scoped>
.movies-page {
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
  justify-content: space-between;
  height: 100%;
}

.sorting {
  display: flex;
  gap: 1vw;
  align-items: center;
  font-size: small;
}

.sort-icon {
  cursor: pointer;
  transition: all 0.5s ease;
}
.sort-icon:hover {
  color: #18a058;
}
</style>
