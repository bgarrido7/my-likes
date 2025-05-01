<script setup>
import { ref, h } from "vue";
// import type { MenuOption } from 'naive-ui'
import { NMenu, NIcon } from "naive-ui";
// import { Navigation24Regular } from "@vicons/ionicons5";
import { CaretDownOutline } from "@vicons/ionicons5";

const collapsed = ref(false);

const menuOptions = ref([
  { href: "/oscars", label: "Oscars 🏆" },
  { href: "/movies", label: "Movies" },
  { href: "/shows", label: "TV Shows" },
  { href: "/animes", label: "Animes & Mangas" },
  { href: "/games", label: "Video Games" },
  { href: "/board-games", label: "Board Games" },
  { href: "/books", label: "Books" },
  { href: "/music", label: "Music" },
  { href: "/yuri", hidden: true },
]);

function expandIcon() {
  return h(NIcon, null, { default: () => h(CaretDownOutline) });
}

function renderMenuLabel(option) {
  if ("href" in option) {
    return h("a", { href: option.href }, [option.label]);
  }
  return option.label;
}

const menuTheme = {
  itemColorHover: "#1f2c38",
  itemColorActive: "#394264",
  itemTextColor: "#ffffff",
  itemTextColorHover: "#dddddd",
  itemTextColorActive: "#ffffff",
};
</script>

<template>
  <nav>
    <n-menu
      class="custom-menu"
      :collapsed="collapsed"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="menuOptions"
      :render-label="renderMenuLabel"
      :expand-icon="expandIcon"
      :theme-overrides="menuTheme"
      :indent="0"
    />
  </nav>
  <!-- :render-icon="renderMenuIcon" -->

  <!-- <ul>
      <div v-for="link in menuOptions">
        <router-link :to="link.href">
          <li
            v-if="!link.hidden"
            :class="{ highlight: $route.path === link.href }"
          >
            {{ link.label }}
          </li>
        </router-link>
      </div>
    </ul> -->
</template>

<style scoped>
nav {
  background-color: #2c3e50;
  display: flex;
  flex-direction: row;
  text-align: center;
  height: 100vh;
  overflow: hidden;
  width: 180px;
}

@media (max-width: 800px) {
  nav {
    width: 0px;
  }
}

ul {
  width: 100%;
  padding: 0;
  list-style: none;
}

li {
  padding: 3vh 0;
  width: 100%;
  margin: 3vh 0;
  color: white;
  text-decoration: none;
}

.custom-menu {
  width: 100%;
}

/* Remove left and right padding */
.custom-menu .n-menu-item-content {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

/* Optional: Remove padding for arrow space (if applicable) */
.custom-menu .n-menu-item-arrow {
  margin-right: 0 !important;
  padding-right: 0 !important;
  display: none;
}
</style>
