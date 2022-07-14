<template>
  <v-row>
    <v-col>
      <EditTargetItem @click="emit('edit', itemKey)" color="yellow" />
    </v-col>
    <v-col>
      <v-btn v-if="!indexItem.private" @click="emit('hide', itemKey)" color="blue">
        HIDE
      </v-btn>
      <v-btn v-else @click="emit('show', itemKey)" color="indigo">
        SHOW
      </v-btn>
    </v-col>
    <v-col>
      <v-btn @click="emit('destroy', itemKey)" color="red">
        DELETE
      </v-btn>
    </v-col>
  </v-row>
</template>

<script setup>
import EditTargetItem from '@/components/admin/EditTargetItem.vue'

defineProps({
  indexItem: Object,
  itemType: String,
  itemKey: [String, Number],
});

const emit = defineEmits(["edit", "hide", "show", "destroy"]);
</script>
