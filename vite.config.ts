import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";
import {resolve} from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(),vueJsx()],
	server:{
		port: 7777
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "/src")
		}
	}
})
