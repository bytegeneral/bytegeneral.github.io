import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'g-kassis.github.io', // <- replace with your actual repo name
})
