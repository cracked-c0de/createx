import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/createx/",
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ["vigorously-first-oriole.ngrok-free.app"]
  }
})
