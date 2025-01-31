import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "tailwindcss"; // Import Tailwind CSS
import autoprefixer from "autoprefixer"; // Optional: For autoprefixing CSS

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        secure: false,
      },
    },
  },
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss(), // Add Tailwind CSS
        autoprefixer(), // Optional: Add autoprefixer for better browser compatibility
      ],
    },
  },
});
