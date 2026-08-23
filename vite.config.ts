import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tanstackRouter from '@tanstack/router-plugin/vite'

// lab.salta.top 部署在根路径（自定义域，GitHub Pages）
export default defineConfig({
  base: '/',
  plugins: [tanstackRouter({ target: 'react' }), react(), tailwindcss()],
})
