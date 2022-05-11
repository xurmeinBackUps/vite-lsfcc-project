import { defineStore } from 'pinia'
import { auth, rtdb } from '../firebaseApp.config.js'
import { ref, onValue, set, push,  } from 'firebase/database'
import {
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  signInWithEmailAndPassword,
  signOut,
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
    actionCodeSettings: {
      mode: '',
      actionCode: '',
      continueUrl: '',
      lang: '',
    }
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
      const ls = window.localStorage
      ls.setItem('lsfcc', '')
      const dbRef = ref(rtdb, `users/${activeUser.uid}/role`)
      onValue(dbRef, (snapshot) => {
        this.userRole = snapshot.val()
        ls.setItem('lsfcc', this.userRole)
      })
    },

    writeBloggerRole(newUser) {
      const newRef = ref(rtdb, 'users/' + newUser.uid)
      const newRefPost = push(newRef)
      set(newRefPost, {
        email: newUser.email,
        role: 'blogger'
      })
    },

    bloggerSignup(targetEmail, blogKey) {
      const actionCodeSettings = {
        url: `${import.meta.env.FB_BASE_URL}/blogNew/${blogKey}`,
        handleCodeInApp: true
      }
      sendSignInLinkToEmail(auth, targetEmail, actionCodeSettings)
        .then(() => {
          window.alert('A link has been sent to the email adress you provided! Check your inbox and follow the instructions to continue')
          window.localStorage.setItem('bloggerEmail', targetEmail)
        }).catch((err) => {
          this.handleErr(err)
        })
    },

    bloggerLogin(){
      if (isSignInWithEmailLink(auth, window.location.href)){
        this.writeBloggerRole(result.user)
        let email = window.localStorage.getItem('bloggerEmail')
        if (!email) {
          email = window.prompt('Please provide your email for confirmation')
        }
        signInWithEmailLink(auth, email, window.location.href)
          .then((result) => {
            window.alert(`Success! ${result.user.email} may now author a new blog entry`)
            window.localStorage.removeItem('bloggerEmail')
          }).catch((err) => {
            this.handleErr(err)
          })
      }
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
