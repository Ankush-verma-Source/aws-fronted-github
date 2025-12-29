import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://100.48.192.165:3000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
