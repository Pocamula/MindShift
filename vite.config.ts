import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/MindShift/',  // Asegura rutas correctas en GitHub Pages
  plugins: [react()],
})
