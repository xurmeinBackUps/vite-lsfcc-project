import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index.js'
import { createPinia } from 'pinia'
import vma from './plugins/vma.js'
import { firebase } from './firebase.config.js'
import firestore from './plugins/firestore.js'
import rtdb from './plugins/rtdb.js'
import bucket from './plugins/bucket.js'
import auth from './plugins/auth.js'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(vma)
app.use(firestore)
app.use(rtdb)
app.use(bucket)
app.use(auth)

app.mount('#app')
