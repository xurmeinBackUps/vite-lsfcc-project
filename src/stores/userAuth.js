import { defineStore } from 'pinia'
import { auth } from '../firebaseApp.config.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'

export const useAuth = defineStore('auth', {
  state() {
    return {
      credentials: {
        email: '',
        password: '',
      },
      currentUser: {},
    }
  },

  actions: {
    signup() {
      createUserWithEmailAndPassword(auth, this.credentials.email, this.credentials.password)
        .then((userCredential) => {
          window.alert('SUCCESS!')
          this.currentUser = userCredential.user
        })
        .catch((err) => {
          window.alert(`this thing went wrong: ${error}`)
        })
    },

    login() {
      signInWithEmailAndPassword(auth, this.credentials.email, this.credentials.password)
        .then((userCredential) => {
          window.alert('Success!')
          const user = userCredential.user
          this.currentUser = user
        })
        .catch((error) => {
          window.alert(`this thing went wrong: ${error}`)
        })
    },

    logout() {
      signOut(auth)
        .then(() => {
          window.alert('You have signed out')
          this.$reset()
        })
        .catch((error) => {
          window.alert(`this thing went wrong: ${error}`)
        })
    },
  },
})
