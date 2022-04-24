import { defineStore } from 'pinia'
import { firestore } from '../firebaseApp.config'
import { collection, getDocs } from 'firebase/firestore'

export const useAnonBlog = defineStore('blog', {
  state: () => ({
    blogs: [],
  }),

  actions: {
    async fetchBlogs() {
      const blogsQuery = getDocs(collection(firestore, 'blog'))
      await blogsQuery.forEach((blog) => {
        this.blogs.push(blog)
      })
    },
  },
})
