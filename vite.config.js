import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import vue from '@vitejs/plugin-vue'
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl'
import ViteRestart from 'vite-plugin-restart'
import FullReload from 'vite-plugin-full-reload'
import { ViteTips } from 'vite-plugin-tips'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    nodeResolve(),
    ViteWebfontDownload([
      'https://fonts.googleapis.com/icon?family=Material+Icons',
      'https://fonts.googleapis.com/css2?family=Forum&family=Roboto:ital,wght@0,400;0,700;1,300&display=swap',
    ]),
    ViteRestart({
      restart: ['[*].config.js'],
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
