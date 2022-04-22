import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import vue from '@vitejs/plugin-vue'
import ViteRestart from 'vite-plugin-restart'
import FullReload from 'vite-plugin-full-reload'
import { ViteTips } from 'vite-plugin-tips'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    nodeResolve(),
    ViteRestart({
      restart: ['[*].config.js', 'App.vue'],
    }),
    FullReload(['src/**/*']),
    ViteTips(),
    viteCommonjs(),
  ],

  envDir: './.env',
  envPrefix: 'FB_',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    cssCodeSplit: true,
  },
})
