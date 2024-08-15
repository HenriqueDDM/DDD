import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    alias: {
      "@": "/src",
      "@src": "./src",
      "@test": "./test",
    },
    root: "./",
  },
  resolve: {
    alias: {
      "@": "/src",
      "@src": "./src",
      "@test": "./test",
    },
  },
});
