<template>
  <div class="oscars-page">
    <div class="header">
      <div class="year-select">
        <label for="year_label">Select the Year:</label>
        <n-select
          v-model:value="selectedYear"
          :options="years"
          inputId="year_label"
        />
      </div>

      <div class="my-wins">
        Correct Bets:
        <span class="correct-bets">{{ correctBets }} </span> / {{ totalAwards }}
      </div>
    </div>

    <div class="awards">
      <n-card
        v-for="(award, key) in awardsForSelectedYear"
        :key="key"
        :title="award.category"
      >
        <ul>
          <li
            v-for="(movie, index) in award.nominees"
            v-bind:key="index"
            :class="isWinner(movie, award.winner) ? 'winner' : ''"
          >
            {{ movie }} <span class="bet" v-if="award.bet === movie"> ↙ </span>
          </li>
        </ul>
      </n-card>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { NSelect, NCard } from "naive-ui";

const jsonUrl = `${import.meta.env.BASE_URL}data/oscars.json`;
const selectedYear = ref("2025");

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

const years = computed(() => {
  const availableYears = [
    "2025",
    "2024",
    "2023",
    "2022",
    "2021",
    "2020",
    "2019",
  ];
  return availableYears.map((year) => ({
    label: year,
    value: year,
  }));
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

const totalAwards = computed(() => {
  const awards = awardsForSelectedYear.value;
  if (!awards) return 0;
  return Object.keys(awards).length;
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
  overflow-y: auto;
  max-height: 100vh;
  width: 100%;
}
.year-select {
  display: flex;
  gap: 1vw;
  align-items: center;
  justify-content: start;
}

.n-select {
  width: 80px;
}
::v-deep(.n-card-header__main) {
  font-weight: 550 !important;
}
.correct-bets {
  color: goldenrod;
  font-weight: bold;
}
span.bet {
  position: relative;
  bottom: 7px;
  color: #2080f0;
  font-weight: 900;
  font-size: 3vin;
}
.winner {
  color: goldenrod;
}
.awards {
  padding-top: 2vmin;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2vw;
  text-transform: capitalize;
}

@media (max-width: 990px) {
  .awards {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 420px) {
  .awards {
    grid-template-columns: 1fr;
  }
}

ul {
  list-style: none;
  padding: 0;
}
li {
  padding-bottom: 1.5vh;
}
</style>
