import { createApp } from 'vue'
import App from './App.vue'

import initElement from './utils/element'
import './style/variables.scss'

import router from './router/index'
import store from './store/index'

const app = createApp(App)
initElement(app)

app.use(router).use(store).mount('#app')
