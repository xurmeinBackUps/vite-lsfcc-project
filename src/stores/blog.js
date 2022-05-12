import { defineStore } from 'pinia'
import { rtdb } from '../firebaseApp.config.js'
import { ref, child, update, push, onValue, set, remove } from 'firebase/database'

export const useAnonBlog = defineStore('blog', {
  state: () => ({
    blogs: [],
    newBlogKey: '',
  }),

  getters: {
    date(){
      let now = Date.now();
      let readable = new Date(now);
      return readable.toDateString();
    }
  },

  actions: {
    fetchBlogs() {
      const dbRef = ref(rtdb, 'blogPosts')
      onValue(dbRef, (snapshot) => {
        this.blogs = snapshot.val()
      })
    },

    createNewKey(){
      this.newBlogKey = push(child(ref(rtdb), 'blogPosts')).key
      set(ref(rtdb, 'blogPosts/' + this.newBlogKey))
    },

    addBlog(blogKey, content = '', publishDate, title = '') {
      const dbRef = ref(rtdb, `blogPosts/${blogKey}`)
      update(dbRef, {
        content: content,
        date: publishDate,
        private: true,
        title: title
      })
    },

    deleteBlog(key) {
      const dbRef = ref(rtdb, `blogPosts/${key}`)
      remove(dbRef)
    },

    setPrivateFalse(key) {
      const settingRef = ref(rtdb, `blogPosts/${key}`)
      update(settingRef, { private: false })
    },

    setPrivateTrue(key) {
      const settingRef = ref(rtdb, `blogPosts/${key}`)
      update(settingRef, { private: true })
    }
  },
})
