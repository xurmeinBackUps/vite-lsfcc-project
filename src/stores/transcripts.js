import { defineStore } from 'pinia'
import { rtdb } from '../firebaseApp.config.js'
import { ref, onValue } from 'firebase/database'

export const useTranscripts = defineStore('transcripts', {
  state: () => ({
    transcripts: [],
  }),

  actions: {
    fetchTranscripts() {
      const dbRef = ref(rtdb, 'transcripts')
      onValue(dbRef, (snapshot) => {
        this.transcripts = snapshot.val()
      })
    },
  },
})
