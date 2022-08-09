import { createApp } from 'vue'
import { createPinia } from 'pinia'
import WebRTC from 'vue-webrtc'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(WebRTC)

app.mount('#app')
