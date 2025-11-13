import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES ? '/WeCook/' : '/',
  server: {
    host: true,
    allowedHosts: [
      'be187786-c9d2-4452-90df-9872a8e3ef01-00-2nc5ikaoxanvy.picard.replit.dev',
      '.replit.dev',
      '.repl.co'
    ]
  }
})

