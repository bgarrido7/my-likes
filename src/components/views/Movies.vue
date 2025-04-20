<template>
  <div class="movies-page">
    <h2>movies</h2>
    <EmptyState />
  </div>
</template>

<script setup>
import EmptyState from "../shared/EmptyState.vue";
</script>

<style scoped>
.movies-page {
  padding: 1vw;
  display: flex;
  flex-direction: column;
}
h2 {
  text-transform: capitalize;
}
</style>
