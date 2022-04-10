import { defineStore } from "pinia";
import { rtdb } from "../firebase.config";
import { ref, onValue } from 'firebase/database'

export const useProfiles = defineStore('profiles', {
  state () {
    return {
      profiles: []
    }
  },

  actions: {
    fetchProfiles(){
      const $p = ref(rtdb, '/profiles')
      onValue($p, async (snapshot) => {
        this.$state.profiles = await snapshot.val()
      })
    }
  }
})
