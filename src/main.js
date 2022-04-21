import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index.js'
import { createPinia } from 'pinia'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

import { rtdb, bucket, auth, firestore } from './firebase.config.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const app = createApp(App)
const pinia = createPinia()
const vuetify = createVuetify()
app.use(vuetify)
app.use(pinia)
app.use(vma)
app.use(rtdb)
app.use(bucket)
app.use(auth)
app.use(firestore)
app.use(router)

app.mount('#app')
