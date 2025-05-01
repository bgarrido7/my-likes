<template>
  <div class="games-page">
    <div class="content">
      <n-card
        v-for="(game, key) in content"
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
    sortData(content.value);
  } catch (error) {
    console.error("Error loading JSON data:", error);
  }
});

function sortData(data) {
  return data.sort((a, b) => a.name.localeCompare(b.name));
}

function getLinkName(link) {
  if (link.includes("steampowered")) return "Steam";
  if (link.includes("gamespot")) return "Gamespot";
  if (link.includes("ign")) return "IGN";
  return "";
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
</style>
