import {firebase } from '../firebase.config.js'
import { getFirestore } from "firebase/firestore";

export default {
	install: (app) => {
		app.config.globalProperties.firestore = getFirestore(firebase)
        app.provide('firestore')
	}
}
