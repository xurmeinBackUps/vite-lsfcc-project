import { defineStore } from "pinia";

export const useUiState = defineStore('uiState', {
  state () {
    return {
      currentUser: {},
      darkMode: false,
      drawerState: false   
    }
  },

  actions: {
    openDrawer() {
      this.$state.drawerState = true
    },
    closeDrawer() {
      this.$state.drawerState = false
    }
  }
})
