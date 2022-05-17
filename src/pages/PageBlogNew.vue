<template>
  <content-wrapper>
    <template #base-component>
      <v-card-title>
        New Blog Post Form
      </v-card-title>
      <FormNewBlog :blog-key="$router.params.blogKey"/>
    </template>
  </content-wrapper>
</template>

<script setup>
import ContentWrapper from "@/layout/ContentWrapper.vue";
import FormNewBlog from "@/components/FormNewBlog.vue";
</script>
