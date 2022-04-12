import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import {base} from 'vue-material-adapter'
import 'material-components-web/dist/material-components-web.min.css';
import { firebasePlugin } from './firebase.config.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.use(base)
app.use(firebasePlugin)

app.mount('#app')
