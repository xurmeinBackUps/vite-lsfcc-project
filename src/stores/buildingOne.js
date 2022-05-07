import { defineStore } from 'pinia'
import { rtdb } from '../firebaseApp.config.js'
import { ref, onValue, set, push } from 'firebase/database'

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
      return this.entriesCount
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

    addEntry(entryDates, entryText) {
      const newRef = push(ref(rtdb, 'schools/building1/entries/' + this.newId))
      set(newRef, {
        dates: entryDates,
        private: false,
        text: entryText,
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
