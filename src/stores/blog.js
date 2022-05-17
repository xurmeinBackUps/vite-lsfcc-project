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
      const initialPostData = {
        content: '',
        date: this.date,
        private: true,
        title: ''
      }
      const newKey = push(child(ref(rtdb), 'blogPosts')).key
      this.newBlogKey = newKey
      const updates = {}
      updates['/blogPosts/' + newKey] = initialPostData

      set(ref(rtdb, 'blogPosts/' + newKey), initialPostData)
    },

    addBlog(key, content = '', title = '') {
      if (content.length == 0 || title.length == 0) return;

      const dbRef = ref(rtdb, `blogPosts/${key}`)
      update(dbRef, {
        content: content,
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
