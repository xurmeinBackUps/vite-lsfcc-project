import { defineStore } from 'pinia'

export const useUiState = defineStore('uiState', {
  state() {
    return {
      darkMode: false,
      drawerState: false,
      newTransForm: false,
      newProfileForm: false,
      newHistoryForm: false,
      newBlogForm: false,
      contactForm: false,
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
    }
  },
})
