import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Configuración de Vite
export default defineConfig({
  plugins: [react()],
  base: '/MindShift/',  // Cambia la ruta base si es necesario
})

