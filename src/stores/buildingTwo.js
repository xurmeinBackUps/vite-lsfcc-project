import { defineStore } from 'pinia'
import { rtdb } from '../firebaseApp.config.js'
import { ref, onValue, set, push } from 'firebase/database'

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

    addEntry(entryDates, entryText) {
      const newHistoryRef = ref(rtdb, 'schools/building2/entries')
      set(newHistoryRef,{
        dates: entryDates,
        position: this.entriesCount,
        private: false,
        text: entryText
      })
    },

    setPrivateFalse(key) {
      const settingRef = ref(rtdb, `schools/building2/entries/${key}`)
      update(settingRef, { private: false })
    },

    setPrivateTrue(key) {
      const settingRef = ref(rtdb, `schools/building2s/entries/${key}`)
      update(settingRef, { private: true })
    }
  },
})
