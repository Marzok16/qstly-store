import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This tells Vite to serve your app from the /qstly-store/ subdirectory
export default defineConfig({
  base: '/qstly-store/',
  plugins: [react()],
})
