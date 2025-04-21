<template>
  <div class="books-page">
    <h2>books</h2>
    <div>
      <n-button-group horizontal>
        <n-button> Novels </n-button>
        <n-button> Manga </n-button>
        <n-button> Comic </n-button>
      </n-button-group>
    </div>

    <EmptyState />
  </div>
</template>

<script setup>
import EmptyState from "@/components/shared/EmptyState.vue";
import { NButton } from "naive-ui";
import { NButtonGroup } from "naive-ui";
</script>

<style scoped>
.books-page {
  padding: 1vw;
  display: flex;
  flex-direction: column;
}
h2 {
  text-transform: capitalize;
}
</style>
