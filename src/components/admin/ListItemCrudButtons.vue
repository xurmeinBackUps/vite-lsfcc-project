<template>
  <div :target-item-key="itemKey">
    <br />
      <v-divider />
    <br />
    <v-row>
      <v-col>
        <edit-target-item @click.prevent="emit('edit', itemKey)" color="amber" :item-type="itemType" :item-key="itemKey" :index-item="indexItem">
          <slot  :name="itemType + '-form-edit'"></slot>
        </edit-target-item>
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
  </div>

</template>

<script setup>
import EditTargetItem from '@/components/admin/EditTargetItem.vue'

defineProps({
  indexItem: Object,
  itemType: String,
  itemKey: String,
});

const emit = defineEmits(["edit", "hide", "show", "destroy"]);
</script>
