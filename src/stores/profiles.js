import { defineStore } from 'pinia'
import { rtdb } from '../firebaseApp.config.js'
import { ref, onValue, push, set } from 'firebase/database'

export const useProfiles = defineStore('profiles', {
  state() {
    return {
      profiles: [],
    }
  },

  actions: {
    fetchProfiles() {
      const $p = ref(rtdb, 'profiles')
      onValue($p, (snapshot) => {
        this.$state.profiles = snapshot.val()
      })
    },

    addProfile(fullname, employmentDates = '', lifetime = '', personalHistory = '', pro = '') {
      const dbRef = ref(rtdb, 'profiles')
      const newProfileRef = push(dbRef)
      set(newProfileRef, {
        fullname: fullname,
        employmentDates: employmentDates,
        lifetime: lifetime,
        personalHistory: personalHistory,
        pro: pro
      })
    },

    updateProfile() {}
  },
})
