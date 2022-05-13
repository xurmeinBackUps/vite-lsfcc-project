import { defineStore } from 'pinia'
import { rtdb } from '../firebaseApp.config.js'
import { ref, onValue, update } from 'firebase/database'

export const useBuildingTwo = defineStore('building2', {
  state: () => ({
    name: '',
    entries: [],
  }),

  actions: {
    fetchName() {
      const dbRef = ref(rtdb, 'schools/building2/name')
      onValue(dbRef, (snapshot) => {
        this.name = snapshot.val()
      })
    },

    fetchEntries() {
      const dbRef = ref(rtdb, 'schools/building2/entries')
      onValue(dbRef, (snapshot) => {
        this.entries = snapshot.val()
      })
    },

    setPrivateFalse(key) {
      const settingRef = ref(rtdb, `schools/building2/entries/${key}`)
      update(settingRef, { private: false })
    },

    setPrivateTrue(key) {
      const settingRef = ref(rtdb, `schools/building2/entries/${key}`)
      update(settingRef, { private: true })
    }
  },
})
