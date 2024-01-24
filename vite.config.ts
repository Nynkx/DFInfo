import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react-swc";
import basicSsl from "@vitejs/plugin-basic-ssl";
// import mkcert from "vite-plugin-mkcert";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // https: true,
    host: true,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./client/src", import.meta.url)),
    },
  },
});
