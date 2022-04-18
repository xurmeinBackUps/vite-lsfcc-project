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

  }
})
