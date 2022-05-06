import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index.js'
import { createPinia } from 'pinia'
// Styles
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { vuetify } from './vuetify.config.js'

import { rtdb, auth } from './firebaseApp.config.js'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(rtdb)
app.use(auth)
app.use(router)
app.use(vuetify)

app.mount('#app')
