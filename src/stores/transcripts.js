import { collection, getDocs } from '@firebase/firestore'
import { firestore } from 'googleapis/build/src/apis/firestore'
import { defineStore } from 'pinia'

export const useTranscripts = defineStore('transcripts', {
  state: () => ({
    transcripts: [],
  }),

  actions: {
    async fetchTranscripts() {
      const transcriptsQuery = await getDocs(collection(firestore, 'transcripts'))
      transcriptsQuery.forEach((trans) => {
        this.transcripts.push(trans)
      })
    },
  },
})
