<template>
  <div>
    <div v-for="post in paginatedPosts" :key="post.frontmatter.title" class="blog-post">
      <h2><a :href="post.url">{{ post.frontmatter.title }}</a></h2>
      <p>{{ post.frontmatter.excerpt }}</p>
      <div v-if="post.frontmatter.image">
        <img :src="post.frontmatter.image" alt="Post image" />
      </div>
      <p>Von {{ post.frontmatter.author }} am {{ post.frontmatter.date }}</p>
    </div>

    <!-- Pagination -->
    <Pagination :total="posts.length" :current="currentPage" :per-page="15" @page-changed="changePage" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import Pagination from './Pagination.vue'
import { data as posts } from '../posts.data'



const currentPage = ref(1)
const postsPerPage = 15

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage
  return posts.slice(start, start + postsPerPage)
})

onMounted(async () => {
  console.log(posts)
})


function changePage(page) {
  currentPage.value = page
}
</script>

<style scoped>
.blog-post {
  margin-bottom: 20px;
}

img {
  max-width: 100%;
  height: auto;
}
</style>