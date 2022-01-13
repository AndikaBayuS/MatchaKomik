import Components from 'unplugin-vue-components/vite';
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    vue(),
    Components({
      dirs: ['src/components'],
      extensions: ['vue'],
      deep: true
    })
  ]
})