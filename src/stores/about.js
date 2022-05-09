import { ref, onValue } from "@firebase/database";
import { defineStore } from "pinia";
import { rtdb } from '../firebaseApp.config.js'

export const useAbout = defineStore('about', {
  state: () => ({
    articles: []
  }),

  actions: {
    fetchArticles() {
      const dbRef = ref(rtdb, 'aboutPageArticles')
      onValue(dbRef, (snapshot) => {
        this.articles = snapshot.val()
      })
    }
  }
})

