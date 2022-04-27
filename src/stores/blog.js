import { defineStore } from 'pinia'
import { rtdb } from '../firebaseApp.config.js'
import { ref, onValue } from 'firebase/database'

export const useAnonBlog = defineStore('blog', {
  state: () => ({
    blogs: [],
  }),

  actions: {
    fetchBlogs() {
      const dbRef = ref(rtdb, 'blogPosts')
      onValue(dbRef, (snapshot) => {
        this.blogs = snapshot.val()
      })
    },
  },
})
