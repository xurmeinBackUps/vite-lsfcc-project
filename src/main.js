// app initialization
import { createApp } from 'vue'
import App from './App.vue'

// vue-deps
import { router } from './router/index.js'
import { createPinia } from 'pinia'

// additional deps
import { rtdb, auth } from './firebaseApp.config.js'
import axios from 'axios'
import VueAxios from 'vue-axios'

// styles
import 'vuetify/styles'
import { vuetify } from './vuetify.config.js'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(rtdb)
app.use(auth)
app.use(VueAxios, axios)
app.use(router)
app.use(vuetify)

if (import.meta.env === 'development') {
  app.config.devtools = true
}

app.mount('#app')
