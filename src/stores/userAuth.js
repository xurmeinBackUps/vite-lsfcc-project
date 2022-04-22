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
      console.log(`$state.credentials.email == ${this.$state.credentials.email}`)
      console.log(`$state.credentials.password == ${this.$state.credentials.password}`)
      signInWithEmailAndPassword(
        auth,
        this.$state.credentials.email,
        this.$state.credentials.password
      ).then((userCredential) => {
        userCredential.user = this.$state.currentUser
      }).catch(error => {
        console.log(`${error}`)
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
