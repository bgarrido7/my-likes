<template>
  <div class="movie-sagas-page">
    <n-button tertiary round type="info" @click="$router.push('/movies')">
      Go Back <template #icon><ArrowBack /></template>
    </n-button>

    <div class="content">
      <div v-for="(saga, i) in content" :key="i" class="sagas">
        <h2>{{ saga.name }}</h2>
        <div class="movies">
          <n-card
            v-for="(movie, key) in sortByYear(saga.movies)"
            :key="key"
            :title="movie.name"
          >
            <template #cover>
              <img :src="movie.cover" />
            </template>
            <div class="footer">
              <span>{{ movie.year }}</span>
              <a :href="movie.url" target="_blank">IMDb</a>
            </div>
          </n-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowBack } from "@vicons/ionicons5";
import { NButton, NCard } from "naive-ui";
import { ref, onMounted } from "vue";

const jsonUrl = `${import.meta.env.BASE_URL}data/sagas.json`;
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

function sortByYear(movies) {
  return movies.sort((a, b) => b.year - a.year);
}
</script>

<style scoped>
.movie-sagas-page {
  padding-bottom: 0;
  overflow-y: auto;
  max-height: 100vh;
  padding: 1vw;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 2vh;
  padding: 2vw;
}

.sagas {
  background-color: #fafafc;
  display: flex;
  flex-direction: column;
  gap: 1.5vw;
  padding: 1vw;
  overflow: auto;
}

.movies {
  display: flex;
  gap: 1vw;
  white-space: nowrap;
}

.n-card {
  width: 12vw;
  max-width: 250px;
  min-width: 180px;
  white-space: wrap;
}

@media (max-width: 800px) {
  .n-card {
    min-width: 150px;
  }
}
.footer {
  display: flex;
  align-items: end;
  justify-content: space-between;
  height: 100%;
}
</style>
