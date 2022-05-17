import { defineStore } from 'pinia'
import { auth, rtdb } from '../firebaseApp.config.js'
import { useRouter } from 'vue-router'
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
    },

    fetchUserRole(activeUser) {
      localStorage.setItem('lsfcc', '')
      const dbRef = ref(rtdb, `users/${activeUser.uid}/role`)
      onValue(dbRef, (snapshot) => {
        this.userRole = snapshot.val()
        localStorage.setItem('lsfcc', this.userRole)
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

    bloggerSignup(targetEmail) {
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

    emailLinkLogin(targetEmail) {
      console.log("AT LINE 76 IN bloggerEmailLinkLogin() OF @/stores/userAuth.js")
      signInWithEmailLink(auth, targetEmail, window.location.href)
      .then((result) => {
        this.currentUser = result.user
        window.alert(`Success! ${result.user.email} may now author a new blog entry`)
      }).catch((err) => {
        this.handleErr(err)
      })
    },

    bloggerVerifyLoginLink(url) {
      console.log("AT LINE 86 IN bloggerVerifyLoginLink() OF @/stores/userAuth.js")
      if (isSignInWithEmailLink(auth, url)) {
        let email = localStorage.getItem('bloggerEmail')

        this.emailLinkLogin(email)
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
