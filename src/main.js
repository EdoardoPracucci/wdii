import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
import bootstrapCss from 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)

app.use(bootstrap).use(bootstrapCss).use(router)

app.mount('#app')
