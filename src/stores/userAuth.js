import { defineStore } from "pinia";
import { rtdb, auth } from "../firebase.config.js";
import { ref, onValue } from 'firebase/database'
import { signInWithEmailAndPassword, signOut } from "@firebase/auth";

export const useAuth = defineStore('auth', {
  state () {
    return {
      users: [],
      credentials: {
        email: '',
        password: ''
      },
      currentUser: {}
    }
  },

  actions: {
    fetchAccounts(){
      const $p = ref(rtdb, '/users')
      onValue($p, (snapshot) => {
        this.$state.users = snapshot.val()
      })
    },

    login() {
      let email = this.$state.credentials.email
      let password = this.$state.credentials.password

      signInWithEmailAndPassword(
        auth,
        email,
        password
      ).then((userCredential) => {
        this.$state.currentUser = userCredential.user
      }).catch((error) => {
        console.log(`${error}`)
        window.alert(`debug info: ###EMAIL = ${email} ###PASS = ${password}`)
      })
    },

    logout() {
      signOut(auth).then(
        () => this.$patch({
          credentials: {
            email: '',
            password: '',
          },
          currentUser: {}
        })
      )
    }
  }
})
