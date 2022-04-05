import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
// Import the functions you need from the SDKs you need
import vueMaterialAdapter from 'vue-material-adapter'
import 'vue-material-adapter/dist/vue-material-adapter.esm.js'
import 'material-components-web';
import 'material-components-web/dist/material-components-web.min.css';
import {
	db,
	auth
} from './firebase.config.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.use(db)
app.use(auth)
app.use(vueMaterialAdapter)

app.mount('#app')
