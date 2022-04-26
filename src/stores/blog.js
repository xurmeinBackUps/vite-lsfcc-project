import { defineStore } from 'pinia'
import { firestore } from '../firebaseApp.config'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'

export const useAnonBlog = defineStore('blog', {
  state: () => ({
    blogs: [],
  }),

  actions: {
    async fetchBlogs() {
      const blogsRef = query(collection(firestore, 'blog'))
      const blogsQuery = query(blogsRef, orderBy('title', 'asc'))
      const blogsDocs = await getDocs(blogsQuery)
      blogsDocs.forEach((doc) => {
        let docData = doc.data()
        this.blogs.push(docData)
      })
    },
  },
})
