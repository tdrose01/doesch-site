import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',
    allowedHosts: [
      'instance-20260201-213840.tail6fbe22.ts.net',
      'localhost',
      '.tail6fbe22.ts.net'
    ]
  }
})
