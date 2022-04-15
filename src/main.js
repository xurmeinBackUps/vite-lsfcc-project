import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
// Import the functions you need from the SDKs you need
import VueMaterialAdapter from 'vue-material-adapter'
import 'material-components-web/dist/material-components-web.min.css';
import { rtdb, bucket, auth, firestore } from './firebase.config.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.use(VueMaterialAdapter)
app.use(rtdb)
app.use(bucket)
app.use(auth)
app.use(firestore)

app.mount('#app')
