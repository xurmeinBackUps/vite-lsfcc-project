import { onValue, ref } from "@firebase/database";
import { defineStore } from "pinia";
import { rtdb } from '../firebaseApp.config.js'

export const useAbout = defineStore('about', {
  state: () => ({
    articles: []
  }),

  actions: {
    sortArticles(arr) {
      const statement = arr[0]
      const crawfordsville = arr[1]
      const education = arr[2]
      const migration = arr[3]
      const preface = arr[4]

      for (let i; i < arr.length; i++) {
        arr.pop()
      }

      arr[0] = preface
      arr[1] = statement
      arr[2] = education
      arr[3] = migration
      arr[4] = crawfordsville
    },

    fetchArticles() {
      const dbRef = ref(rtdb, 'aboutPageArticles')
      onValue(dbRef, (snapshot) => {
        snapshot.forEach(data => {
          this.articles.push(data.val())
        })
      })
    }
  }
})

