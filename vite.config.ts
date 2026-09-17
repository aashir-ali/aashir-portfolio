import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";
// Remove this if you don't need overlay
import { vitePluginErrorOverlay } from "@hiogawa/vite-plugin-error-overlay";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => ({
  // "./" keeps asset paths relative, so the site works whether it is served
  // from https://<user>.github.io/<repo>/ or from a custom-domain root.
  base: "./",
  assetsInclude: ["**/*.glb"],
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    tailwindcss(),
    mode === "development" ? vitePluginErrorOverlay() : null,
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
