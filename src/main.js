import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index.js'
import { createPinia } from 'pinia'
// Styles
import 'vuetify/styles'
import { vuetify } from './vuetify.js'

import { rtdb, bucket, auth, firestore } from './firebase.config.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { loadFonts } from './plugins/webfontloader'

const app = createApp(App)
const pinia = createPinia()
const webfont = loadFonts()

app.use(webfont)
app.use(vuetify)
app.use(pinia)
app.use(rtdb)
app.use(bucket)
app.use(auth)
app.use(firestore)
app.use(router)

app.mount('#app')
