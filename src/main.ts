import { createApp } from 'vue'
import './style.css'
import App from './App.tsx'
import router from '@/router'
import store from "@/store"

createApp(App).use(router).use(store).mount('#app')
