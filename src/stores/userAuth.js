import { defineStore } from 'pinia'
import { auth, rtdb } from '../firebaseApp.config.js'
import { ref, set, onValue, push } from 'firebase/database'
import {
  createUserWithEmailAndPassword,
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
    adminUser: false
  }),

  getters: {
    roleIsAdmin(state){
      const auth = useAuth()
      let role = auth.userRole
      switch (role) {
        case 'admin':
          return state.adminUser = true
          break;
        case 'hudson':
          return state.adminUser = true
          break;
        case 'blogger':
          return state.adminUser = false
          break;
        default: // i.e. user === ''
          return state.adminUser = false
          break;
      }
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

    writeHudsonRole(activeUser){
      const newRef = ref(rtdb, 'users/' + activeUser.uid)
      const newRefPost = push(newRef)
      set(newRefPost, {
        email: activeUser.email,
        role: 'hudson'
      })
    },



    adminSignup() {
      createUserWithEmailAndPassword(auth, this.credentials.email, this.credentials.password)
        .then((userCredential) => {
          const user = userCredential.user
          this.currentUser = user
          this.writeHudsonRole(this.currentUser)
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
