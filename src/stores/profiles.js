import { defineStore } from 'pinia'
import { rtdb } from '../firebaseApp.config.js'
import { ref, onValue } from 'firebase/database'

export const useProfiles = defineStore('profiles', {
  state() {
    return {
      profiles: [],
      profile: {},
    }
  },

  actions: {
    fetchProfiles() {
      const $p = ref(rtdb, '/profiles')
      onValue($p, (snapshot) => {
        this.$state.profiles = snapshot.val()
      })
    },
  },
})
