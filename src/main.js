import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
// Import the functions you need from the SDKs you need
import {
	rtdb,
	auth,
	bucket,
	firestore
} from './firebase.config.js'

const app = createApp(App)
const pinia = createPinia()
app.use(router)

app.use(pinia)

app.use(rtdb)
app.use(auth)
app.use(bucket)
app.use(firestore)
// app.use(vueMaterialAdapter)
app.mount('#app')
