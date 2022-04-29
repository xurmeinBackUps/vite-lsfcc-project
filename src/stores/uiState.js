import { defineStore } from 'pinia'
import { useAuth } from './userAuth.js'

export const useUiState = defineStore('uiState', {
  state() {
    return {
      darkMode: false,
      drawerState: false,
    }
  },

  getters: {
    getCurrentUser() {
      const $auth = useAuth()

      return $auth.currentUser
    },
  },

  actions: {
    openDrawer() {
      this.drawerState = true
    },

    closeDrawer() {
      this.drawerState = false
    },
  },
})
