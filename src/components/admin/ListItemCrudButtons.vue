<template>
  <v-row>
    <v-col>
      <v-btn @click="emit('edit', itemKey)" color="yellow">
        Edit
      </v-btn>
    </v-col>
    <!-- <v-col>
      <v-btn @click="emit('save', itemKey)" color="green"> Save </v-btn>
    </v-col> -->
    <v-col>
      <v-btn v-if="!indexItem.private" color="blue" @click="emit('hide', itemKey)">
        Hide
      </v-btn>
      <v-btn v-else color="indigo" @click="emit('show', itemKey)"> show </v-btn>
    </v-col>
    <v-col>
      <v-btn color="red" @click="emit('destroy', itemKey)"> REMOVE FROM SITE </v-btn>
    </v-col>
  </v-row>
</template>

<script setup>
defineProps({
  indexItem: Object,
  itemType: String,
  itemKey: [String, Number],
});

const emit = defineEmits(["edit", "hide", "show", "destroy"]);
</script>
