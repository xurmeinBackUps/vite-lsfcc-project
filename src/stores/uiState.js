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
    adminUser: false
  }),

  getters: {
    roleIsAdmin(state){
      const auth = useAuth()
      let role = auth.userRole
      switch (role) {
        case 'admin':
          return state.adminUser = true
          break;
        case 'hudson':
          return state.adminUser = true
          break;
        case 'blogger':
          return state.adminUser = false
          break;
        default: // i.e. user === ''
          return state.adminUser = false
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

    privateItemUiHandler(item) {

    }
  },
})
