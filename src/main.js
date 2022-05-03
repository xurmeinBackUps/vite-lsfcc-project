import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index.js'
import { createPinia } from 'pinia'
// Styles
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { vuetify } from './vuetify.config.js'

import { rtdb, auth } from './firebaseApp.config.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(vuetify)
app.use(pinia)
app.use(rtdb)
app.use(auth)

window.localStorage.setItem('lsfcc-user-role', '')

app.mount('#app')
