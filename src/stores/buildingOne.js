import { defineStore } from 'pinia'
import { rtdb } from '../firebaseApp.config.js'
import { ref, onValue, update } from 'firebase/database'

export const useBuildingOne = defineStore('building1', {
  state: () => ({
    name: '',
    entries: [],
  }),

  actions: {
    fetchName() {
      const $name = ref(rtdb, 'schools/building1/name')
      onValue($name, (snapshot) => {
        this.name = snapshot.val()
      })
    },

    fetchEntries() {
      const $entries = ref(rtdb, 'schools/building1/entries')
      onValue($entries, (snapshot) => {
        this.entries = snapshot.val()
      })
    },

    setPrivateFalse(key) {
      const settingRef = ref(rtdb, `schools/building1/entries/${key}`)
      update(settingRef, { private: false })
    },

    setPrivateTrue(key) {
      const settingRef = ref(rtdb, `schools/building1/entries/${key}`)
      update(settingRef, { private: true })
    }
  },
})
