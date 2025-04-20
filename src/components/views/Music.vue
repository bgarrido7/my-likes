<template>
  <div class="music-page">
    <h2>music</h2>
    <EmptyState />
  </div>
</template>

<script setup>
import EmptyState from "@/components/shared/EmptyState.vue";
</script>

<style scoped>
.music-page {
  padding: 1vw;
  display: flex;
  flex-direction: column;
}
h2 {
  text-transform: capitalize;
}
</style>
