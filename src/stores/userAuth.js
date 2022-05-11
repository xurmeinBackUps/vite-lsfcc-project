import { defineStore } from 'pinia'
import { auth, rtdb } from '../firebaseApp.config.js'
import { ref, onValue, set, push, remove } from 'firebase/database'
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
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
      const ls = window.localStorage
      onAuthStateChanged(
        auth,
        u => this.currentUser = u,
        err => this.handleErr(err)
      )
      this.userRole = ls.getItem('lsfcc')
      this.bloggerEmail = ls.getItem('bloggerEmail')
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

    bloggerSignup(targetEmail, blogKey) {
      const actionCodeSettings = {
        url: `${import.meta.env.FB_BASE_URL}/blog/new/${blogKey}`,
        handleCodeInApp: true,
      }
      sendSignInLinkToEmail(auth, targetEmail, actionCodeSettings)
        .then(() => {
          window.alert('A link has been sent to the email adress you provided! Check your inbox and follow the instructions to continue')
          window.localStorage.setItem('bloggerEmail', targetEmail)
        }).catch((err) => {
          this.handleErr(err)
        })
    },

    bloggerSignin() {
      let url = window.location.href
      signInWithEmailLink(auth, this.bloggerEmail, url)
      .then((result) => {
        window.alert(`Success! ${result.user.email} may now author a new blog entry`)
      }).catch((err) => {
        this.handleErr(err)
      })
    },

    parseSigninLink(){
      let url = window.location.href
      console.log(url.split('?'))
    },

    handleBloggerLink(){
      const ls = window.localStorage
      let url = window.location.href
      if (isSignInWithEmailLink(auth, url)){
        this.parseSigninLink()
      } else {
        console.log('something went wrong.....')
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
    },
  }

})
