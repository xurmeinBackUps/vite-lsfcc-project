import { fileURLToPath, URL } from 'url'
import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite'
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
      mode: 'development',
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
      mode: 'production' || 'development',
      plugins: [
        vue(),
        nodeResolve(),
        viteCommonjs(),
        splitVendorChunkPlugin()
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
        minify: 'esbuild',
        rollupOptions: {
          output: {
            manualChunks: {
              firebase: [
                'firebase/app',
                'firebase/auth',
                'firebase/database'
              ],
              vue: ['vue'],
              'vue-router': ['vue-router'],
              vuetify: [
                'vuetify/lib/iconsets/mdi',
                'vuetify/components',
                'vuetify/directives'
              ],
            }
          }
        },
      },

      define: {
        __APP_ENV__: env.APP_ENV
      }
    }
  }
})
