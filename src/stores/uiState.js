import { defineStore } from 'pinia'
import { useAuth } from './passwordAuth.js'

export const useUiState = defineStore('uiState', {
  state: () => ({
    drawerState: false,
    newTransForm: false,
    newProfileForm: false,
    newHistoryForm: false,
    newBlogForm: false,
    contactForm: false,
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

    closeTransDiag() {
      this.newTransForm = false
    },

    closeProfileDiag() {
      this.newProfileForm = false
    },

    closeHistoryDiag() {
      this.newHistoryForm = false
    },

    closeBlogDiag() {
      this.newBlogForm = false
    },

    closeContactForm() {
      this.contactForm = false
    },
  }
})
