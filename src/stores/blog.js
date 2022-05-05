import { defineStore } from 'pinia'
import { rtdb } from '../firebaseApp.config.js'
import { ref, push, onValue, set } from 'firebase/database'

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

    addBlog(content, date, title) {
      const dbRef = ref(rtdb, 'blogPosts')
      const newBlogRef = push(dbRef)
      set(newBlogRef, {
        content: content,
        date: date,
        private: true,
        title: title
      })
    },
  },
})
