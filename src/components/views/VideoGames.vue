<template>
  <div class="games-page">
    <h2>video games</h2>
    <EmptyState />
  </div>
</template>

<script setup>
import EmptyState from "../shared/EmptyState.vue";
</script>

<style scoped>
.games-page {
  padding: 1vw;
  display: flex;
  flex-direction: column;
}
h2 {
  text-transform: capitalize;
}
</style>
