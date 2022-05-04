import { defineStore } from 'pinia'
import { rtdb } from '../firebaseApp.config.js'
import { ref, onValue } from 'firebase/database'

export const useBuildingOne = defineStore('building1', {
  state: () => ({
    name: '',
    entries: [],
  }),

  getters: {
    entriesCount()  {
      return this.entries.length
    },

    newId() {
      return this.entriesCount + 1
    }
  },

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

    addEntry(dates, text) {
      const newRef = ref(rtdb, 'schools/building1/entries' + this.newId)
      set(newRef, {
        dates: dates,
        text: text
      })
    }

  },
})
