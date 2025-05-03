<template>
  <div class="games-page">
    <div class="sorting">
      Sort by:
      <n-radio-group v-model:value="selectedSorting" @click="triggerSorting">
        <n-radio-button value="name">Name</n-radio-button>
        <n-radio-button value="year">Year</n-radio-button>
      </n-radio-group>

      <n-icon
        size="18"
        class="sort-icon"
        :component="ArrowSortDownLines16Regular"
        @click="updateSortOrder"
        :style="{ transform: 'rotate(' + rotationAngle + 'deg)' }"
      />
    </div>

    <div class="content">
      <n-card
        v-for="(game, key) in sortedData"
        :key="key"
        :title="game.name"
        :segmented="{
          cover: true,
          footer: 'soft',
        }"
      >
        <template #cover>
          <img :src="game.cover" />
        </template>
        <template></template>

        <template #footer>
          <div class="description">
            <span>{{ game.year }}</span>
          </div>
        </template>
        <template #action
          ><div class="footer">
            <span>{{ game.platform }}</span>
            <a :href="game.url" target="_blank">{{ getLinkName(game.url) }}</a>
          </div>
        </template>
      </n-card>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { NCard, NRadioButton, NRadioGroup, NIcon } from "naive-ui";
import { ArrowSortDownLines16Regular } from "@vicons/fluent";

const jsonUrl = `${import.meta.env.BASE_URL}data/video-games.json`;
const content = ref([]);

const selectedSorting = ref("year");
const sortOrder = ref("asc");
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

function getLinkName(link) {
  if (link.includes("steampowered")) return "Steam";
  if (link.includes("gamespot")) return "Gamespot";
  if (link.includes("ign")) return "IGN";
  return "";
}

const sortedData = computed(() => {
  if (selectedSorting.value === "name") {
    return content.value.sort((a, b) =>
      sortOrder.value === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
  }
  if (selectedSorting.value === "year") {
    return content.value.sort((a, b) =>
      sortOrder.value === "asc" ? b.year - a.year : a.year - b.year
    );
  }
  return content.value;
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
}
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
  justify-content: start;
  align-items: end;
}

.footer {
  display: flex;
  align-items: end;
  justify-content: space-between;
}

.sorting {
  display: flex;
  gap: 1vw;
  align-items: center;
}
.sort-icon {
  cursor: pointer;
  transition: all 0.5s ease;
}
.sort-icon:hover {
  color: #18a058;
}
</style>
