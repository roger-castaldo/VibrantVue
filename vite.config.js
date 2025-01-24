import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    vue(),
    viteCompression({
        verbose: true, // Logs compression results
        disable: false, // Enable compression
        threshold: 1025, // Minimum size (in bytes) to compress
        algorithm: 'gzip', // Compression algorithm
        ext: '.gz', // File extension for compressed files
        filter: /\.(css|js|html|svg)$/ // Compress only these file types
    })
  ],
  build: {
    sourcemap: true,
    outDir: "./dist",
    lib: {
      entry:resolve(__dirname, "./src/components/index.ts"),
      fileName:'vibrantvue',
      name:`vibrant-vue`,
      formats: ["umd", "esm","cjs"],
    },
    minify:'esbuild',
    cssMinify:'esbuild',
    emptyOutDir: false,
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        'vue',
        'chart',
        'summernote'
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'vibrantvue.min.css';
          return assetInfo.name;
        },
      },
    },
  },
  test: {
    reporters: ['default', 'html'],
    coverage: {
        reportsDirectory: "html/ui",
        include: ["**/*.{ts,vue}"],
        exclude: ["src/__tests__/**","**/index.ts","src/css/**","src/messages/**",
          "**/typeDefinitions.ts","**/interfaces.ts","**/enums.ts","src/components/shared.ts","src/components/utilities.ts",
          "src/components/common/dynamic-slot.vue", "src/components/extended/chart.vue", "src/components/extended/code-writer.vue",
          "src/components/dragging/*.*", "src/components/form/full-editor.vue"],
        reporter: ['text', ['html', { subdir: 'coverage'}]],
        provider: "v8",
    },
    browser: {
      enabled: true,
      name: 'chromium',
      provider: 'playwright',
    },
    css:true,
    setupFiles: "./src/setup-tests.ts"
  },
});