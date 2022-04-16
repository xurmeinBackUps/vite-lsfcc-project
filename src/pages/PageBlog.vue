<template>
  <content-wrapper>
    <template #base-component>
      <TextAreaBlog />
    </template>
  </content-wrapper>
</template>

<script setup>
import ContentWrapper from "@/layout/ContentWrapper.vue";
import TextAreaBlog from "@/components/TextAreaBlog.vue";
</script>
