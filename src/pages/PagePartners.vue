<template>
  <div class="unmargin">
    <ListEntriesPartners class="top"/>
      <!-- add MY INFO here. -->
    <section class="text-center dev-info">
      <ul class="w-100">
        <li>
          <a target="_blank" href="https://xurmeinbackups.github.io/Portfolio2/" class="float-left">Portfolio (Pretty old)</a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/xurmeinBackUps" class="float-right">Github</a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import ListEntriesPartners from "@/components/ListEntriesPartners.vue"
</script>

<style lang="scss" scoped>
.unmargin {
  margin-left: -7em;
  margin-right: -7em;
}

.top {
  margin-top: -25em;
}

.dev-info {
  position: absolute;
  bottom: 15em;
}
</style>
