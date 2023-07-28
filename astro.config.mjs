import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/styles/variable.scss";
          @import "@/styles/mixin.scss";
        `,
          sourceMap: false,
        },
      },
    },
  },
});
