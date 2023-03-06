import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: '/vue/',
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
        additionalData: [
          '@import "@/assets/style/mixins.scss"',
          '@import "@/assets/style/variables.scss"',
          ''
        ].join(';\n')
      },
      sass: { charset: false },
    },
  },
  server: {
    fs: {
      allow: ['..'],
    },
  },
});
