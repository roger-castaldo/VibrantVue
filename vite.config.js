import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  // resolve:{
  //   alias:{
  //     'vue':'https://cdnjs.cloudflare.com/ajax/libs/vue/3.3.8/vue.esm-browser.min.js',
  //     'jquery':'https://code.jquery.com/jquery-3.6.0.slim.min.js',
  //     'chart':'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.0/chart.umd.min.js',
  //     'summernote':'https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.20/summernote.min.js'
  //   }
  // },
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
        'jquery',
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
          if (assetInfo.name === 'style.css') return 'vibrantvue.css';
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
          "src/components/common/dynamic-slot.vue"],
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