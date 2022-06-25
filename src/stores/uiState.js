import { defineStore } from 'pinia'
import { useAuth } from './userAuth.js'

export const useUiState = defineStore('uiState', {
  state: () => ({
    drawerState: false,
    contactForm: false,
    newForm: false,
    editForm: false
  }),

  getters: {
    roleIsAdmin(){
      const auth = useAuth()
      let role = auth.userRole
      switch (role) {
        case 'admin':
          return true
          break;
        case 'hudson':
          return true
          break;
        case 'blogger':
          return false
          break;
        default: // i.e. user === ''
          return false
          break;
      }
    }
  },

  actions: {
    openDrawer() {
      this.drawerState = true
    },

    closeDrawer() {
      this.drawerState = false
    },

    openContact() {
      this.contactForm = true
    },

    closeContact() {
      this.contactForm = false
    }
  }
})
