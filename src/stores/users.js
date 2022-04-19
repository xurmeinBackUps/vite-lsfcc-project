import { defineStore } from "pinia";
import { rtdb, auth } from "../firebase.config.js";
import { ref, onValue } from 'firebase/database'
import { signInWithEmailAndPassword, signOut } from "@firebase/auth";

export const useUsers = defineStore('user', {
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
        window.alert(`${error}`)
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
