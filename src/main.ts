import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.tsx'
import router from '@/router'
import "./app.scss"
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'

createApp(App).use(ElementPlus).use(router).use(createPinia()).mount('#app')
