import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vueDevTools from 'vite-plugin-vue-devtools'
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
	base: "https://synxense.github.io/sync-sense-client-portal/",
	plugins: [
		vue(),
		// vueDevTools(),
		Components({
			dts: "src/components.d.ts",
		}),
		AutoImport({
			imports: ["vue", "vue-router"],
			dts: "src/auto-imports.d.ts",
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	css: {
		postcss: {
			plugins: [tailwind(), autoprefixer()],
		},
	},
})
