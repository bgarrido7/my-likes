<template>
  <div class="yuri-page">
    <h2>yuri</h2>
    <EmptyState />
  </div>
</template>

<script setup>
import EmptyState from "@/components/shared/EmptyState.vue";
</script>

<style scoped>
.yuri-page {
  padding: 1vw;
  display: flex;
  flex-direction: column;
}
h2 {
  text-transform: capitalize;
}
</style>
