import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    nodeResolve()
  ],
  css: {
    devSourcemap: true
  },
  envDir: './.env',
  envPrefix: 'FB_',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
