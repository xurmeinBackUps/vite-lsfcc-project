<template>
    <ul v-for="blog in store.blogs">
        <li>{{ blog }}</li>
    </ul>
</template>

<script setup>
import { useAnonBlog } from '@/stores/blog.js'
import { onMounted } from 'vue';

const store = useAnonBlog()

onMounted(() => {
    store.fetchBlogs()
})

</script>

<style lang="scss" scoped></style>
