import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";
import {resolve} from 'path';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(),vueJsx(),AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),],
	server:{
		port: 7777,
		proxy: {
			'/Cat':'http://localhost:9860/',
			changeOrigin: "true",
      rewrite: (path) => path.replace(/^\/Cat/, '')


		}
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "/src"),
			"@views":resolve(__dirname, "/src/views")
		}
	},
})
