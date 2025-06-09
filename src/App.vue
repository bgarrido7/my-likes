<script setup>
import { ref, onMounted } from "vue";
import { NLayout, NLayoutSider } from "naive-ui";
import Navbar from "./components/Navbar.vue";

const collapsed = ref(false);
const isMobile = ref(window.innerWidth < 800);

onMounted(() => {
  window.addEventListener("resize", handleResize);
  handleResize();
});

const handleResize = () => {
  isMobile.value = window.innerWidth < 800;
  collapsed.value = isMobile.value;
};
</script>

<template>
  <main>
    <n-layout has-sider>
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="0"
        :width="180"
        :collapsed="collapsed"
        :show-trigger="isMobile"
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
        <Navbar :collapsed="collapsed" />
      </n-layout-sider>

      <n-layout>
        <router-view />
      </n-layout>
    </n-layout>
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-auto-flow: column;
  height: 100%;
}
@media (max-width: 800px) {
  main {
    grid-template-columns: 1fr;
  }
}

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
</style>
