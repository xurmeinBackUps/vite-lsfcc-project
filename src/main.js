import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
// Import the functions you need from the SDKs you need
import $fb from '@/plugins/firebase.plugin'
import $vma from '@/plugins/vue-material-adapter.plugin'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const pinia = createPinia()
const app = createApp(App)


app.use(router)
app.use($fb)
app.use(pinia)
app.use($vma)

app.mount('#app')
