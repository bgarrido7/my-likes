<template>
  <div class="movies-page">
    <div class="header">
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

      <router-link to="movies/sagas">
        <n-button tertiary round type="success"> Check Movie Sagas </n-button>
      </router-link>

      <div class="filter">
        <label for="genre_label">Genre:</label>
        <n-select
          v-model:value="selectedFilter"
          :options="genres"
          multiple
          inputId="genre_label"
          placeholder="Select Some"
          :clearable="true"
        />
      </div>
    </div>

    <div class="content">
      <n-card
        v-for="(movie, key) in sortedData"
        :key="key"
        :title="movie.name"
        :segmented="{
          cover: true,
          footer: 'soft',
        }"
      >
        <template #cover>
          <img :src="movie.cover" />
        </template>

        <template />

        <template #footer>
          <n-collapse>
            <n-collapse-item>
              <span v-for="(genre, g) in movie.genre" :key="g" class="genre">
                {{ genre.replace(/-/g, " ") }}
              </span>
            </n-collapse-item>
          </n-collapse>
        </template>

        <template #action>
          <div class="description">
            {{ movie.year }}
            <a :href="movie.url" target="_blank">IMDb</a>
          </div>
        </template>
      </n-card>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import {
  NCard,
  NRadioButton,
  NRadioGroup,
  NIcon,
  NSelect,
  NButton,
  NCollapse,
  NCollapseItem,
} from "naive-ui";
import {
  ArrowSort16Regular,
  ArrowSortDownLines16Regular,
} from "@vicons/fluent";

const jsonUrl = `${import.meta.env.BASE_URL}data/movies.json`;
const content = ref([]);

const selectedFilter = ref([]);

const selectedSorting = ref("");
const sortOrder = ref("asc");
const isSorted = ref(false);
const rotationAngle = ref(0);

const genres = computed(() => {
  const availableGenres = [
    "action",
    "romance",
    "thriller",
    "fantasy",
    "tragedy",
    "animation",
    "drama",
    "comedy",
    "documentary",
    "meaning-of-life",
  ];
  return availableGenres.map((genre) => ({
    label: genre.includes("life")
      ? "Meaning of Life"
      : genre.charAt(0).toUpperCase() + genre.slice(1),
    value: genre,
  }));
});

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
  let filtered = content.value;

  if (selectedFilter.value.length) {
    filtered = filtered.filter((movie) =>
      movie.genre.some((g) => selectedFilter.value.includes(g))
    );
  }
  if (selectedSorting.value === "name") {
    return [...filtered].sort((a, b) =>
      sortOrder.value === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
  }
  if (selectedSorting.value === "year") {
    return [...filtered].sort((a, b) =>
      sortOrder.value === "asc" ? b.year - a.year : a.year - b.year
    );
  }

  return filtered;
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
  padding-bottom: 0;
  overflow-y: auto;
  max-height: 100vh;
  padding: 1vw;
}

.header {
  display: flex;
  justify-content: space-between;
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

.sorting,
.filter {
  display: flex;
  gap: 1vw;
  align-items: center;
}

.filter {
  min-width: 215px;
  width: fit-content;
}

.sort-icon {
  cursor: pointer;
  transition: all 0.5s ease;
}
.sort-icon:hover {
  color: #18a058;
}

.genre {
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
}
</style>
