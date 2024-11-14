import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/google-news" : "/",
  plugins: [react()],
});
