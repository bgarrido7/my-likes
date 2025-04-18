<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <main>
    <Navbar />
    <router-view />
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 10fr;
  height: 100%;
}
</style>
