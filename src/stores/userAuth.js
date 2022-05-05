import { defineStore } from 'pinia'
import { auth, rtdb } from '../firebaseApp.config.js'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import {
  ref,
  set,
  onValue,
  push
} from 'firebase/database'


export const useAuth = defineStore('auth', {
  state() {
    return {
      credentials: {
        email: '',
        password: ''
      },
      currentUser: {},
      userRole: ''
    }
  },

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

    writeUserRole(activeUser){
      console.log(activeUser)
      const newRef = ref(rtdb, 'users/' + activeUser.uid)
      const newRefPost = push(newRef)
      set(newRefPost, {
        email: activeUser.email,
        role: 'blogger'
      })
    },

    signup() {
      createUserWithEmailAndPassword(auth, this.credentials.email, this.credentials.password)
        .then((userCredential) => {
          const user = userCredential.user
          this.currentUser = user
          this.writeUserRole(this.currentUser)
          window.alert('SUCCESS!')
        })
        .catch((error) => {
          this.handleErr(error)
        })
    },


    login() {
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
