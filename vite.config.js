import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://battery-backend-cfe1.onrender.com",
        secure: false,
      },
    },
    build: {
      rollupOptions: {
        external: ["mongoose"],
      },
    },
  },
  plugins: [react()],
});
