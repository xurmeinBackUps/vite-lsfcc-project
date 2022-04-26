import { defineStore } from 'pinia'
import { firestore } from '../firebaseApp.config'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'

export const useAnonBlog = defineStore('blog', {
  state: () => ({
    blogs: [],
  }),

  actions: {
    async fetchBlogs() {
      const blogRef = collection(firestore, 'blog')
      const blogQuery = query(blogRef, orderBy('title'))
      const blogDocs = await getDocs(blogQuery)
      blogDocs.forEach((doc) => {
        this.blogs.push(doc.data())
      })
    },
  },
})
