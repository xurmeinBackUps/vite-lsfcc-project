import { defineStore } from 'pinia'
import { rtdb } from '../firebaseApp.config.js'
import {
  ref,
  onValue,
  push,
  set,
  update,
  remove
} from 'firebase/database'

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

    deleteProfile(key) {
      const dbRef = ref(rtdb, `profiles/${key}`)
      remove(dbRef)
    },

    setPrivateFalse(key) {
      const settingRef = ref(rtdb, `profiles/${key}`)
      update(settingRef, { private: false })
    },

    setPrivateTrue(key) {
      const settingRef = ref(rtdb, `profiles/${key}`)
      update(settingRef, { private: true })
    },

    editProfile(key) {

    }
  },
})
