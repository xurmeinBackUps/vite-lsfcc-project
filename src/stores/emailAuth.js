import { defineStore } from 'pinia'
import { auth, rtdb } from '../firebaseApp.config.js'
import { ref, set, onValue, push, remove } from 'firebase/database'
import {
  signOut,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink
} from 'firebase/auth'

export const useEmailAuth = defineStore('emailAuth', {
    state: () => ({
        mode: '',
        actionCode: '',
        continueUrl: '',
        lang: '',
        email: '',
        userRole: ''
      }),

      actions: {
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
              window.alert(`Success! ${email} may now author a new blog entry`)
              window.localStorage.removeItem('bloggerEmail')
            }).catch((err) => {
              this.handleErr(err)
            })
        }
      },
      }
})
