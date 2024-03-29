import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mix from 'vite-plugin-mix'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    mix({
      handler: './api/upload.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:42201',
  //       changeOrigin: true,
  //     },
  //   },
  // },
})
