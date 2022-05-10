import { defineStore } from 'pinia'
import { useAuth } from './userAuth.js'

export const useUiState = defineStore('uiState', {
  state: () => ({
    drawerState: false,
    newTransForm: false,
    newProfileForm: false,
    newHistoryForm: false,
    newBlogForm: false,
    contactForm: false,
  }),



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

    privateItemUiHandler(item) {

    }
  },
})
