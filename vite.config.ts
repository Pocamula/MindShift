import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/MindShift/", // Asegúrate de que coincide con el nombre exacto del repositorio
});
