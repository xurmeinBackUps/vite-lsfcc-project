<template>
  <div>
    <v-expansion-panel-title>
      <span>
        {{ profile.fullname + '  ' }}<span v-if="profile.lifetime" class="text-subtitle-1">&mdash; ({{ profile.lifetime }})</span>
      </span>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <p v-if="profile.pro" class="text-subtitle-2">
        {{ profile.pro }}<span v-if="profile.employmentDates"> from {{ profile.employmentDates }}</span>
      </p>
      <br/>
      <p v-if="profile.personalHistory">{{ profile.personalHistory }}</p>
      <p class="no-data" v-if="profile.fullname === 'Jennie'">We only know this [student's(???)] name</p>
    </v-expansion-panel-text>

    <!--  -->
  </div>
</template>

<script setup>
import { onMounted } from'vue'

defineProps({
  profile: Object,
});

onMounted(() => {})
</script>

<style lang="scss" scoped>
.no-data {
  text-align: center;
  font-style: italic;
}
</style>
