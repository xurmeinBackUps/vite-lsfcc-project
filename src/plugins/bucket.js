import { firebase } from "../firebase.config.js";
import { getStorage } from "firebase/storage";

export default {
	install: (app) => {
		app.config.globalProperties.bucket = getStorage(firebase)
        app.provide('bucket')
    }
}
