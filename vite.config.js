import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	base: "./",
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
    server: {
      port: 3000,
      open: true,
      // 配置代理
      proxy: {
		'/sys': {
			target: 'http://soa.swust.edu.cn/',
			ws: true,
			changeOrigin: true,
		},
		'/swust': {
			target: 'http://202.115.175.175/',
			ws: true,
			changeOrigin: true,
		},
		'/acadmicManager': {
			target: 'https://matrix.dean.swust.edu.cn/',
			ws: true,
			changeOrigin: true,
		},
        '/mht_shall': {
          target: 'http://myo.swust.edu.cn/',
          ws: true,
          changeOrigin: true,
        },
		'/api': {
			target: 'http://192.168.2.238:8080/',
			ws: true,
			changeOrigin: true,
			rewrite:(path) => path.replace(/^\/api/, '')
		},
		'/teachn': {
			target: 'http://202.115.175.175/',
			ws: true,
			changeOrigin: true,
		},
      },
    },
 })
