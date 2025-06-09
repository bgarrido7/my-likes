<template>
  <n-menu
    :options="menuOptions"
    :collapsed="collapsed"
    :default-value="selectedKey"
    :value="route.path"
    @update:value="handleSelect"
    :theme-overrides="menuTheme"
    :expand-icon="expandIcon"
  />
</template>

<script setup>
import { ref } from "vue";
import { NMenu } from "naive-ui";
import { useRouter, useRoute } from "vue-router";

defineProps({
  collapsed: Boolean,
});

const emit = defineEmits();

const selectedKey = ref("");
const router = useRouter();
const route = useRoute();

const menuOptions = [
  { key: "/oscars", label: "Oscars 🏆" },
  { key: "/movies", label: "Movies" },
  { key: "/shows", label: "TV Shows" },
  { key: "/animes", label: "Animes & Mangas" },
  { key: "/games", label: "Video Games" },
  { key: "/board-games", label: "Board Games" },
  { key: "/books", label: "Books" },
  { key: "/music", label: "Music" },
];

function handleSelect(key) {
  selectedKey.value = key;
  if (key !== route.path) {
    router.push(key);
    emit("update-collapse", true);
  }
}

const menuTheme = {
  color: "#2c3e50",
  itemTextColor: "white",
  itemTextColorHover: "white",
  itemTextColorActive: "white",
  itemTextColorActiveHover: "white",
};
</script>

<style scoped>
::v-deep(.n-menu) {
  height: 100vh;
  font-size: 15px;
  padding-top: 2vh;
}

::v-deep(.n-menu-item) {
  text-align: center;
  padding: 4vh 0;
  margin: 3vh 0;
}

::v-deep(.n-menu-item:hover) {
  background-color: #1f2c38 !important;
  cursor: pointer;
}

::v-deep(.n-menu-item-content) {
  padding: 0 !important;
}
</style>
