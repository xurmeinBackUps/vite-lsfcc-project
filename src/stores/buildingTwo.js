import { defineStore } from 'pinia'
import { rtdb } from '../firebaseApp.config.js'
import { ref, onValue, set, push } from 'firebase/database'

export const useBuildingTwo = defineStore('building2', {
  state: () => ({
    name: '',
    entries: [],
  }),

  getters: {
    entriesCount: (state) => {
      return state.entries.length
    },
  },

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
      const newHistoryRef = ref(rtdb, 'schools/building2/entries' + this.newId)
      set(newHistoryRef,{
          dates: entryDates,
          text: entryText
      })
    },

    updateEntry() {},
  },
})
