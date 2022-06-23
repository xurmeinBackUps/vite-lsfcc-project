import { defineStore } from 'pinia'
import { rtdb } from '../firebaseApp.config.js'
import {
  ref,
  onValue,
  push,
  set,
  update,
  remove
} from 'firebase/database'

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
      set(newTransRef, {
        private: false,
        speaker: speaker,
        text: text
      })
    },

    deleteTranscript(key) {
      const dbRef = ref(rtdb, `transcripts/${key}`)
      remove(dbRef)
    },

    setPrivateFalse(key) {
      const settingRef = ref(rtdb, `transcripts/${key}`)
      update(settingRef, { private: false })
    },

    setPrivateTrue(key) {
      const settingRef = ref(rtdb, `transcripts/${key}`)
      update(settingRef, { private: true })
    },


  }
})
