import { createApp } from 'vue'
import 'material-components-web';
import 'material-components-web/dist/material-components-web.min.css';
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
// Import the functions you need from the SDKs you need
import vueMaterialAdapter from 'vue-material-adapter'

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
	apiKey: import.meta.env.FB_API_KEY,
	authDomain: import.meta.env.FB_AUTH_DOMAIN,
	databaseUrl: import.meta.env.FB_DB_URL,
	projectId: import.meta.env.FB_PROJECT_ID,
	storageBucket: import.meta.env.FB_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.FB_MSG_SENDER_ID,
	appId: import.meta.env.FB_APP_ID,
	measurementId: import.meta.env.FB_MEASUREMENT_ID
};

const $fb = initializeApp(firebaseConfig);
const db = getDatabase($fb)
const auth = getAuth($fb)
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const app = createApp(App)

app.use(router)
app.use($fb)
app.use(db)
app.use(auth)
app.use(createPinia())
app.use(vueMaterialAdapter)

app.mount('#app')
