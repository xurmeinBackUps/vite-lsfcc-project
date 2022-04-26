import { defineStore } from 'pinia'
import { firestore } from '../firebaseApp.config'
import { collection, getDocs } from 'firebase/firestore'

export const useAnonBlog = defineStore('blog', {
  state: () => ({
    blogs: [],
  }),

  actions: {
    async fetchBlogs() {
      const blogsRef = collection(firestore, 'blog')
      const blogsDocs = await getDocs(blogsRef)
      blogsDocs.forEach((doc) => {
        let docData = doc.data()
        this.blogs.push(docData)
      })
    },
  },
})
