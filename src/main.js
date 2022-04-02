import { createApp } from 'vue'
import vueMaterialAdapter from 'vue-material-adapter/dist/vue-material-adapter.esm.js'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
// Import the functions you need from the SDKs you need
import fb from "@/plugins/firebase.plugin.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const pinia = createPinia()
const app = createApp(App)


app.use(router)
app.use(fb)
app.use(pinia)
app.use(vueMaterialAdapter)

app.mount('#app')
