import { defineStore } from 'pinia'
import { rtdb } from '../firebaseApp.config.js'
import { ref, onValue, update, remove, set } from 'firebase/database'


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

    // addBuildingEntry(bId, dates = '', text = '') {
    //   const dbRef = ref(rtdb, `schools/${bId}/entries`)
    //   const newEntryRef = push(dbRef)
    //   set(newEntryRef, {
    //     dates: dates,
    //     private: false,
    //     text: text
    //   })
    // },

    deleteEntry(bId, key) {
      const dbRef = ref(rtdb, `schools/${bId}/entries/${key}`)
      remove(dbRef)
    },

    setPrivateFalse(bId, key) {
      const settingRef = ref(rtdb, `schools/${bId}/entries/${key}`)
      update(settingRef, { private: false })
    },

    setPrivateTrue(bId, key) {
      const settingRef = ref(rtdb, `schools/${bId}/entries/${key}`)
      update(settingRef, { private: true })
    },

    submitEdit(bId, key, newDates, newText) {
      const dbRef = ref(rtdb, `schools/${bId}/entries/${key}`)
      update(dbRef, {
        dates: newDates,
        text: newText
      })
    }
  }
})
