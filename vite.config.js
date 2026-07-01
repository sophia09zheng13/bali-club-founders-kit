import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// If you deploy to a sub-path (e.g. GitHub Pages at /repo-name/),
// set `base: "/repo-name/"` below. For Vercel/Netlify root hosting, leave it as "/".
export default defineConfig({
  base: "/",
  plugins: [react()],
});
