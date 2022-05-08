import { fileURLToPath, URL } from 'url'
import { defineConfig, loadEnv } from 'vite'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import vue from '@vitejs/plugin-vue'
import ViteRestart from 'vite-plugin-restart'
import { ViteTips } from 'vite-plugin-tips'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {

  const env = loadEnv(mode, process.cwd(), '')

  if (command === 'serve') {
    return {
      plugins: [
        vue(),
        nodeResolve(),
        ViteRestart({
          restart: ['[*].config.js', 'App.vue'],
        }),
        ViteTips({
          update: false
        }),
        viteCommonjs(),
      ],

      envDir: './.env',

      envPrefix: 'FB_',

      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
      },

      define: {
        __APP_ENV__: env.APP_ENV
      }
    }
  } else {
    return {
      plugins: [
        vue(),
        nodeResolve(),
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

      define: {
        __APP_ENV__: env.APP_ENV
      }
    }
  }
})
