import { defineStore } from 'pinia'
import { auth, rtdb } from '../firebaseApp.config.js'
import { useAnonBlog } from './blog.js'
import { ref, onValue, update, set, push, remove  } from 'firebase/database'
import {
  signInWithEmailAndPassword,
  signOut,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  onAuthStateChanged,
} from 'firebase/auth'


export const useAuth = defineStore('auth', {
  state: () => ({
    credentials: {
      email: '',
      password: ''
    },
    currentUser: {},
    userRole: '',
    bloggerEmail: ''
  }),

  actions: {
    handleErr(err) {
      window.alert(`this thing went wrong: ${err}`)
    },

    checkStorage() {
      onAuthStateChanged(
        auth,
        u => this.currentUser = u,
        err => this.handleErr(err)
      )
      this.userRole = localStorage.getItem('lsfcc')
      this.bloggerEmail = localStorage.getItem('bloggerEmail')
    },

    fetchUserRole(activeUser) {
      const ls = window.localStorage
      ls.setItem('lsfcc', '')
      const dbRef = ref(rtdb, `users/${activeUser.uid}/role`)
      onValue(dbRef, (snapshot) => {
        this.userRole = snapshot.val()
        ls.setItem('lsfcc', this.userRole)
      })
    },

    adminLogin() {
      signInWithEmailAndPassword(auth, this.credentials.email, this.credentials.password)
        .then((userCredential) => {
          const user = userCredential.user
          this.currentUser = user
          this.fetchUserRole(this.currentUser)
          window.alert('Success!')
        })
        .catch((error) => {
          this.handleErr(error)
        })
    },

    writeBloggerRole(newUser) {
      const newRef = set(ref(rtdb, 'users/' + newUser.uid))
      update(newRef, {
        email: newUser.email,
        role: 'blogger'
      })
    },


    bloggerSignup(targetEmail, blogKey) {
      const actionCodeSettings = {
        url: `${import.meta.env.FB_BASE_URL}/blog/new/${blogKey}`,
        handleCodeInApp: true,
      }
      sendSignInLinkToEmail(auth, targetEmail, actionCodeSettings)
        .then(() => {
          window.alert('A link has been sent to the email adress you provided, but you may provide your post now.')
          window.localStorage.setItem('bloggerEmail', targetEmail)
        }).catch((err) => {
          this.handleErr(err)
        })
    },

    bloggerEmailLinkLogin() {
      console.log("AT LINE 88 IN bloggerEmailLinkLogin() OF @/stores/userAuth.js")
      signInWithEmailLink(auth, email, window.location.href)
        .then((result) => {
          this.writeBloggerRole(result.user)
          window.alert(`Success! ${result.user.email} may now author a new blog entry`)
          ls.removeItem('bloggerEmail')
        }).catch((err) => {
          this.handleErr(err)
        })
    },

    bloggerLogin(){
      const ls = window.localStorage
      if (isSignInWithEmailLink(auth, window.location.href)){
        console.log("AT LINE 94 IN bloggerLogin() OF @/stores/userAuth.js")
        this.bloggerEmailLinkLogin()
      } else {
        this.bloggerEmail = ls.getItem('bloggerEmail')
        if (!this.bloggerEmail) {
          this.bloggerEmail = window.prompt('Please provide your email for confirmation')
        }
      }
    },

    logout() {
      const ls = window.localStorage
      signOut(auth)
        .then(() => {
          window.alert('You have signed out')
        })
        .catch((error) => {
          this.handleErr(error)
        })
      ls.removeItem('lsfcc')
      this.$reset()
    }
  },
})
