import { defineStore } from 'pinia'
import { rtdb } from '../firebaseApp.config.js'
import { ref, onValue, update } from 'firebase/database'


export const useBuildingHistory = defineStore('buildingHistory', {
  state: () => ({
    name: '',
    entries: []
  }),

  actions: {
    fetchName(bId) {
      const dbRef = ref(rtdb, `schools/${bId}/name`)
      onValue(dbRef, (snapshot) => {
        this.name = snapshot.val()
      })
    },

    fetchEntries(bId) {
      const dbRef = ref(rtdb, `schools/${bId}/entries`)
      onValue(dbRef, (snapshot) => {
        this.entries = snapshot.val()
      })
    },

    setPrivateFalse(bId, key) {
      const settingRef = ref(rtdb, `schools/${bId}/entries/${key}`)
      update(settingRef, { private: false })
    },

    setPrivateTrue(bId, key) {
      const settingRef = ref(rtdb, `schools/${bId}/entries/${key}`)
      update(settingRef, { private: true })
    }
  }
})
