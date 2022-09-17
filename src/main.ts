import { createApp } from 'vue'
import App from './App.tsx'
import router from '@/router'
import store from "@/store"
import "./app.scss"
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'

createApp(App).use(ElementPlus).use(router).use(store).mount('#app')
