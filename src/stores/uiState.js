import { defineStore } from 'pinia'
import { useAuth } from './userAuth.js'

export const useUiState = defineStore('uiState', {
  state() {
    return {
      darkMode: false,
      drawerState: false,
      userRole: ''
    }
  },

  getters: {
    getCurrentUserRole(state) {
      const $auth = useAuth()

      return state.userRole = $auth.userRole
    },
  },

  actions: {
    openDrawer() {
      this.drawerState = true
    },

    closeDrawer() {
      this.drawerState = false
    },

    // TODO?: implement functions to configure userRule-based handling of uiState
  },
})
