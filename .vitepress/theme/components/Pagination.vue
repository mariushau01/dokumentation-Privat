<template>
  <nav aria-label="Page navigation" class="pagination-container">
    <ul class="pagination">
      <li class="pagination-item" v-for="page in totalPages" :key="page" @click="$emit('page-changed', page)">
        <button :class="{ active: page === current }">{{ page }}</button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  total: Number,
  current: Number,
  perPage: Number
})

const totalPages = computed(() => Math.ceil(props.total / props.perPage))
</script>

<style scoped>
/* Container zentrieren */
.pagination-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

/* Pagination-Elemente */
.pagination {
  display: flex;
  list-style: none;
  padding: 0;
}

.pagination-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px; /* Einheitliche Breite */
  height: 40px; /* Einheitliche Höhe */
  margin: 0 5px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.pagination-item:hover {
  background-color: #f0f0f0;
}

.pagination-item.active {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}

</style>