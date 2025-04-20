<template>
  <div class="oscars-page">
    <div class="header">
      <div class="card flex justify-center p">
        <label for="year_label">Select the Year:</label>
        <Select
          inputId="year_label"
          v-model="selectedYear"
          :options="years"
          class="year-select"
        ></Select>
      </div>

      <div class="my-wins">Correct Bets: {{ correctBets }}</div>
    </div>

    <div class="awards">
      <div v-for="(award, key) in awardsForSelectedYear" :key="key">
        <h1>{{ award.category }}</h1>
        <ul>
          <li
            v-for="(movie, index) in award.movies"
            v-bind:key="index"
            :class="isWinner(movie, award.winner) ? 'winner' : ''"
          >
            {{ movie }} <span class="bet" v-if="award.bet === movie"> ↙ </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";

const jsonUrl = `${import.meta.env.BASE_URL}data/oscars.json`;
const selectedYear = ref("2025");
const years = ref(["2025", "2024", "2023", "2022", "2021", "2020", "2019"]);

const awards = ref({});

onMounted(async () => {
  try {
    const response = await fetch(jsonUrl);
    const data = await response.json();
    awards.value = data;
  } catch (error) {
    console.error("Error loading JSON data:", error);
  }
});

const awardsForSelectedYear = computed(() => {
  return awards.value[selectedYear.value] || null;
});

function isWinner(movie, winner) {
  if (!movie || !winner) return false;
  return movie.toLowerCase() === winner.toLowerCase();
}

const correctBets = computed(() => {
  let count = 0;
  if (awardsForSelectedYear.value) {
    for (const [_, award] of Object.entries(awardsForSelectedYear.value)) {
      if (award.winner.toLowerCase() === award.bet.toLowerCase()) count++;
    }
  }
  return count;
});
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
}
.oscars-page {
  display: flex;
  flex-direction: column;
  padding: 3vmin;
  width: 100%;
}

.year-select {
  margin-left: 1vw;
}

span.bet {
  position: relative;
  bottom: 7px;
  right: 3px;
  color: green;
  font-weight: 900;
  font-size: 3vmin;
}
.winner {
  color: goldenrod;
}
.awards {
  padding: 2vmin;
  display: flex;
  flex-wrap: wrap;
  gap: 5vw;
  text-transform: capitalize;
}
ul {
  list-style: none;
  padding: 0;
}
</style>
