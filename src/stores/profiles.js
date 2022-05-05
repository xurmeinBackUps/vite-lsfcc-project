import { defineStore } from 'pinia'
import { rtdb } from '../firebaseApp.config.js'
import { ref, onValue, push, set, update } from 'firebase/database'

export const useProfiles = defineStore('profiles', {
  state: () => ({
      profiles: [],
  }),

  actions: {
    fetchProfiles() {
      const $p = ref(rtdb, 'profiles')
      onValue($p, (snapshot) => {
        this.profiles = snapshot.val()
      })
    },

    addProfile(fullname, employmentDates = '', lifetime = '', personalHistory = '', pro = '') {
      const dbRef = ref(rtdb, 'profiles')
      const newProfileRef = push(dbRef)
      set(newProfileRef, {
        fullname: fullname,
        employmentDates: employmentDates,
        lifetime: lifetime,
        private: false,
        personalHistory: personalHistory,
        pro: pro
      })
    },

    updateProfile() {},

    setToPrivate(targetProfile) {
      const dbRef = ref(rtdb, `profiles/${targetProfile}/private`)
      console.log(dbRef)
      update(dbRef, false)
    }
  },
})
