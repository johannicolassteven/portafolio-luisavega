import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portafolio-luisavega/', // el nombre exacto de tu repo
  plugins: [react()]
})
