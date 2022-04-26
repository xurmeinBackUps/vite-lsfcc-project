import { defineStore } from 'pinia'
import { firestore } from 'googleapis/build/src/apis/firestore'
import { collection, getDocs } from '@firebase/firestore'

export const useTranscripts = defineStore('transcripts', {
  state: () => ({
    transcripts: [],
  }),

  actions: {
    async fetchTranscripts() {
      const transcriptsRef = collection(firestore, 'transcripts')
      const docs = await getDocs(transcriptsRef)
      docs.forEach((trans) => {
        let data = trans.data()
        this.transcripts.push(data)
      })
    },
  },
})
