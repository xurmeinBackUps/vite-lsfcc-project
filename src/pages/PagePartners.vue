<template>
  <div class="unmargin">
    <ListEntriesPartners class="top"/>
      <!-- add MY INFO here. -->
    <section class="text-center dev-info">
      Web Development & Design by Jake Peacock.
      <v-list class="w-100">
        <v-list-item>
          <a target="_blank" href="https://xurmeinbackups.github.io/Portfolio2/">Portfolio (Pretty old)</a>
        </v-list-item>
        <v-list-item>
          <a target="_blank" href="https://github.com/xurmeinBackUps">Github</a>
        </v-list-item>
      </v-list>
      <span class="float-left">^ links. ^</span>
    </section>
  </div>
</template>

<script setup>
import ListEntriesPartners from "@/components/lists/ListEntriesPartners.vue"
</script>

<style lang="scss" scoped>
.unmargin {
  margin-left: -7em;
  margin-right: -7em;
}

.top {
  margin-top: -15em;
}

.dev-info {
  position: absolute;
  bottom: 10em;
  left: 50%;
}
</style>
