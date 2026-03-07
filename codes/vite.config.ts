import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  base: './',
  root: '.',
  publicDir: resolve(__dirname, '../yours'),
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
