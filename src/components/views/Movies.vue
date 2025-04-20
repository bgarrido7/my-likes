<template>
  <div class="movies-page">
    <h2>movies</h2>
    <div class="empty-state">
      <img src="../../assets/construction.png" width="500vw" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
</script>

<style scoped>
.movies-page {
  padding: 1vw;
}
h2 {
  text-transform: capitalize;
}
.empty-state {
  height: calc(100% - 36px);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
