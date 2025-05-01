<template>
  <div class="books-page">
    <div class="content">
      <n-card v-for="(book, key) in content" :key="key" :title="book.name">
        <template #cover>
          <img :src="book.cover" />
        </template>
        <div class="description">
          <span>{{ book.author }}</span>
          <div class="footer">
            <span>{{ book.year }}</span>
            <a :href="book.url" target="_blank">Goodreads</a>
          </div>
        </div>
      </n-card>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { NButton, NButtonGroup, NCard } from "naive-ui";

const jsonUrl = `${import.meta.env.BASE_URL}data/books.json`;
const content = ref([]);

onMounted(async () => {
  try {
    const res = await fetch(jsonUrl);
    if (!res.ok) throw new Error("Failed to load data");
    const jsonData = await res.json();
    content.value = jsonData.content;
  } catch (error) {
    console.error("Error loading JSON data:", error);
  }
});
</script>

<style scoped>
.books-page {
  padding: 1vw;
  padding-bottom: 0;
  overflow-y: auto;
  max-height: 100vh;
}

.content {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12vw, auto));
  justify-content: start;
  gap: 1.5vw;
  padding: 2vw;
}

@media (max-width: 990px) {
  .content {
    display: flex;
    flex-wrap: wrap;
  }
  .n-card {
    width: 150px;
  }
}

.description {
  display: flex;
  justify-content: end;
  flex-direction: column;
  height: 100%;
}

.footer {
  display: flex;
  align-items: end;
  justify-content: space-between;
}
</style>
