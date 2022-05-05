import { defineStore } from 'pinia'
import { useAuth } from './userAuth.js'

export const useUiState = defineStore('uiState', {
  state() {
    return {
      darkMode: false,
      drawerState: false,
      newTransForm: false,
      newProfileForm: false,
      newHistoryForm: false,
      storedRole: '',
    }
  },

  getters: {
    currentUserRole() {
      const $auth = useAuth()

      return $auth.userRole
    },

    setStoredRole() {
      const ls = window.localStorage
      return this.storedRole = ls.getItem('lsfcc')
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




    /*
      TODO?: implement functions to configure userRule-based handling of uiState

      permissionsCheck(role) {
        switch (role) {
          case 'admin':
            this.adminUser = true
            break;
          case 'hudson':
            this.adminUser = true
            break;
          case 'blogger':
            this.adminUser = false
            break;
          default:
            this.adminUser = false
            break;
        }
      }

    */
  },
})
