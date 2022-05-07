import { onValue, ref } from "@firebase/database";
import { defineStore } from "pinia";
import { rtdb } from '../firebaseApp.config.js'

export const useAbout = defineStore('about', {
  state() {
    return {
      articles: []
    }
  },

  actions: {
    fetchArticles() {
      const dbRef = ref(rtdb, 'aboutPageArticles')
      onValue(dbRef, (snapshot) => {
        snapshot.forEach(child => {
          this.articles.push(child.val())
        })
      })
    }
  }
})

