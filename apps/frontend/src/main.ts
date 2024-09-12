import { createApp } from 'vue'
import App from './App.vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
// Add this line to import your main CSS file
import './assets/main.css'

const app = createApp(App)
app.use(Toast)
app.mount('#app')
