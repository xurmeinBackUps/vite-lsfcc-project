import { onValue, ref } from "@firebase/database";
import { defineStore } from "pinia";
import { rtdb } from '../firebaseApp.config.js'

export const useAbout = defineStore('about', {
  state: () => ({
    articles: []
  }),

  getters: {

  },

  actions: {
    sortArticles(arr) {
      let statement = arr[0]
      let crawfordsville = arr[1]
      let education = arr[2]
      let migration = arr[3]
      let preface = arr[4]

      const newArr = []
      newArr[0] = preface
      newArr[1] = statement
      newArr[2] = education
      newArr[3] = migration
      newArr[4] = crawfordsville
      this.articles = newArr

    },

    fetchArticles() {
      const dbRef = ref(rtdb, 'aboutPageArticles')
      onValue(dbRef, (snapshot) => {
        snapshot.forEach(data => {
          this.articles.push(data.val())
        })
      }, { onlyOnce: true })
    }
  }
})

