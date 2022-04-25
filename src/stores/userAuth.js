import { defineStore } from 'pinia'
import { rtdb, auth } from '../firebaseApp.config.js'
import { ref, onValue } from 'firebase/database'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

export const useAuth = defineStore('auth', {
  state() {
    return {
      users: [],
      credentials: {
        email: '',
        password: '',
      },
      currentUser: {},
    }
  },

  actions: {
    fetchAccounts() {
      console.log(auth)

      const $p = ref(rtdb, '/users')
      onValue($p, (snapshot) => {
        this.users = snapshot.val()
      })
    },
    signup() {
      createUserWithEmailAndPassword(auth, this.credentials.email, this.credentials.password)
        .then((userCredential) => {
          return (this.currentUser = userCredential.user)
        })
        .catch((err) => {
          const errCode = err.errCode
          const errMsg = err.message
          console.log(errCode, errMsg)
        })
    },
    login() {
      console.log(`$state.credentials.email == ${this.$state.credentials.email}`)
      console.log(`$state.credentials.password == ${this.$state.credentials.password}`)
      signInWithEmailAndPassword(auth, this.$state.credentials.email, this.$state.credentials.password)
        .then((userCredential) => {
          userCredential.user = this.$state.currentUser
        })
        .catch((error) => {
          console.log(`${error}`)
        })
    },
  },
})
