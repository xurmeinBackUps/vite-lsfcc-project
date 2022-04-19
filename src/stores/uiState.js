import { defineStore } from "pinia";

export const useUiState = defineStore('uiState', {
  state () {
    return {
      currentUser: {},
      darkMode: false,
      drawerState: false   
    }
  },

  getters: {

  },

  actions: {
    toggleDrawer() {
      if (this.$state.drawerState === false) {
        this.$state.drawerState = true
      } else {
        this.$state.drawerState = false
      }
    },
  }
})
