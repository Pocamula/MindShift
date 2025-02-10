import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/MindShift/',  // Aquí se configura el subdirectorio donde estará alojada la app
})
