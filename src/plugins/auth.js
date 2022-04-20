import {firebase} from '../firebase.config.js'
import { getAuth } from 'firebase/auth'

export default {
  install: (app) => {
    app.config.globalProperties.auth =  getAuth(firebase)
    app.provide('auth')
  }
}
