import { defineStore } from 'pinia'
import { rtdb } from '../firebaseApp.config.js'
import { ref, onValue, push, set } from 'firebase/database'

export const usePartners = defineStore('partners', {
  state() {
    return {
      partners: [],
    }
  },

  actions: {
    fetchPartners() {
      const $p = ref(rtdb, 'partnerEntries')
      onValue($p, (snapshot) => {
        this.partners = snapshot.val()
      })
    },

    addPartner(name, imageUrl = '', homepage = '') {
      const dbRef = ref(rtdb, 'partnerEntries')
      const newPartnerRef = push(dbRef)
      set(newPartnerRef, {
        name: name,
        imageUrl: imageUrl,
        homepage: homepage
      })
    }
  },
})
