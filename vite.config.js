import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/g-kassis.github.io/', // Your repo name
  build: {
    outDir: 'dist', // Make sure Vite outputs to the `dist` directory
  }
})
