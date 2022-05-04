import { defineStore } from 'pinia'
import { rtdb } from '../firebaseApp.config.js'
import { ref, onValue, push, set } from 'firebase/database'

export const useTranscripts = defineStore('transcripts', {
  state: () => ({
    transcripts: [],
    trans: {}
  }),

  actions: {
    fetchTranscriptByKey(string) {
      const dbRef = ref(rtdb, `transcripts/${string}`)
      onValue(dbRef, (snapshot) => {
        this.trans = snapshot.val()
      })
    },

    fetchTranscripts() {
      const dbRef = ref(rtdb, 'transcripts')
      onValue(dbRef, (snapshot) => {
        this.transcripts = snapshot.val()
      })
    },

    addTranscript(speaker, text) {
      const dbRef = ref(rtdb, 'transcripts')
      const newTransRef = push(dbRef)
      set((newTransRef), {
        speaker: speaker,
        text: text
      })
    },

    updateAllRecords(){
      const endpoint = ref(rtdb, 'transcripts')
      onValue(endpoint, (snapshot) => {
        snapshot.forEach(child => {
          update(child, {
            'private': false
          })
        })
      })
    }
  },
})
