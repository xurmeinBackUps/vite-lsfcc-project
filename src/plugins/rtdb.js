import { firebase } from '../firebase.config.js'
import { getDatabase } from 'firebase/database'

export default {
  install: (app) => {
    app.config.globalProperties.rtdb = getDatabase(firebase)
    app.provide('rtdb')
	}
}

