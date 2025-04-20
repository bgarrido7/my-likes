<template>
  <div class="animes-page">
    <h2>animes</h2>
    <EmptyState />
  </div>
</template>

<script setup>
import EmptyState from "../shared/EmptyState.vue";
</script>

<style scoped>
.animes-page {
  padding: 1vw;
  display: flex;
  flex-direction: column;
}
h2 {
  text-transform: capitalize;
}
</style>
