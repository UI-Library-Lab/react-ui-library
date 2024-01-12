// vite.config.ts
import { defineConfig } from "file:///C:/Home/dev/projects/ui-library/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Home/dev/projects/ui-library/node_modules/@vitejs/plugin-react/dist/index.mjs";
import tsConfigPaths from "file:///C:/Home/dev/projects/ui-library/node_modules/vite-tsconfig-paths/dist/index.mjs";
import dts from "file:///C:/Home/dev/projects/ui-library/node_modules/vite-plugin-dts/dist/index.mjs";
import EsLint from "file:///C:/Home/dev/projects/ui-library/node_modules/vite-plugin-linter/dist/index.js";
import macrosPlugin from "file:///C:/Home/dev/projects/ui-library/node_modules/vite-plugin-babel-macros/dist/plugin.js";
import { glob } from "file:///C:/Home/dev/projects/ui-library/node_modules/glob/dist/esm/index.js";
import { extname, relative, resolve } from "path";
import { fileURLToPath } from "node:url";
var __vite_injected_original_import_meta_url = "file:///C:/Home/dev/projects/ui-library/vite.config.ts";
var { EsLinter, linterPlugin } = EsLint;
var vite_config_default = defineConfig((configEnv) => ({
  plugins: [
    macrosPlugin(),
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              pure: true,
              namespace: "uiLibrary"
            }
          ]
        ]
      }
    }),
    tsConfigPaths(),
    dts({
      insertTypesEntry: true,
      include: ["src/"]
    }),
    linterPlugin({
      include: ["./src/**/*.{ts,tsx}"],
      linters: [new EsLinter({ configEnv })]
    })
  ],
  server: {
    host: true
  },
  resolve: {
    preserveSymlinks: true
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve("src", "index.ts"),
      formats: ["es"]
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      input: Object.fromEntries(
        glob.sync("lib/**/*.{ts,tsx}").map((file) => [
          // The name of the entry point
          // lib/nested/foo.ts becomes nested/foo
          relative("lib", file.slice(0, file.length - extname(file).length)),
          // The absolute path to the entry file
          // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
          fileURLToPath(new URL(file, __vite_injected_original_import_meta_url))
        ])
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js"
      }
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxIb21lXFxcXGRldlxcXFxwcm9qZWN0c1xcXFx1aS1saWJyYXJ5XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxIb21lXFxcXGRldlxcXFxwcm9qZWN0c1xcXFx1aS1saWJyYXJ5XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Ib21lL2Rldi9wcm9qZWN0cy91aS1saWJyYXJ5L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgdHNDb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJ1xyXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcclxuaW1wb3J0IEVzTGludCBmcm9tICd2aXRlLXBsdWdpbi1saW50ZXInXHJcbmltcG9ydCBtYWNyb3NQbHVnaW4gZnJvbSBcInZpdGUtcGx1Z2luLWJhYmVsLW1hY3Jvc1wiXHJcbmltcG9ydCB7IGdsb2IgfSBmcm9tIFwiZ2xvYlwiO1xyXG5pbXBvcnQgeyBleHRuYW1lLCByZWxhdGl2ZSwgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tIFwibm9kZTp1cmxcIjtcclxuXHJcbmNvbnN0IHsgRXNMaW50ZXIsIGxpbnRlclBsdWdpbiB9ID0gRXNMaW50XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKGNvbmZpZ0VudikgPT4gKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICBtYWNyb3NQbHVnaW4oKSxcclxuICAgIHJlYWN0KHtcclxuICAgICAgYmFiZWw6IHtcclxuICAgICAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgICBbXHJcbiAgICAgICAgICAgICdiYWJlbC1wbHVnaW4tc3R5bGVkLWNvbXBvbmVudHMnLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcHVyZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBuYW1lc3BhY2U6IFwidWlMaWJyYXJ5XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIF1cclxuICAgICAgfVxyXG4gICAgfSksIFxyXG4gICAgdHNDb25maWdQYXRocygpLFxyXG4gICAgZHRzKHtcclxuICAgICAgaW5zZXJ0VHlwZXNFbnRyeTogdHJ1ZSxcclxuICAgICAgaW5jbHVkZTogWydzcmMvJ10sXHJcbiAgICB9KSxcclxuICAgIGxpbnRlclBsdWdpbih7XHJcbiAgICAgIGluY2x1ZGU6IFsnLi9zcmMvKiovKi57dHMsdHN4fSddLFxyXG4gICAgICBsaW50ZXJzOiBbbmV3IEVzTGludGVyKHsgY29uZmlnRW52IH0pXSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICBob3N0OiB0cnVlLFxyXG4gIH0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgcHJlc2VydmVTeW1saW5rczogdHJ1ZVxyXG4gIH0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIGNvcHlQdWJsaWNEaXI6IGZhbHNlLFxyXG4gICAgbGliOiB7XHJcbiAgICAgIGVudHJ5OiByZXNvbHZlKCdzcmMnLCAnaW5kZXgudHMnKSxcclxuICAgICAgZm9ybWF0czogWydlcyddLFxyXG4gICAgfSxcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgZXh0ZXJuYWw6IFtcInJlYWN0XCIsIFwicmVhY3QvanN4LXJ1bnRpbWVcIl0sXHJcbiAgICAgIGlucHV0OiBPYmplY3QuZnJvbUVudHJpZXMoXHJcbiAgICAgICAgZ2xvYi5zeW5jKFwibGliLyoqLyoue3RzLHRzeH1cIikubWFwKChmaWxlKSA9PiBbXHJcbiAgICAgICAgICAvLyBUaGUgbmFtZSBvZiB0aGUgZW50cnkgcG9pbnRcclxuICAgICAgICAgIC8vIGxpYi9uZXN0ZWQvZm9vLnRzIGJlY29tZXMgbmVzdGVkL2Zvb1xyXG4gICAgICAgICAgcmVsYXRpdmUoXCJsaWJcIiwgZmlsZS5zbGljZSgwLCBmaWxlLmxlbmd0aCAtIGV4dG5hbWUoZmlsZSkubGVuZ3RoKSksXHJcbiAgICAgICAgICAvLyBUaGUgYWJzb2x1dGUgcGF0aCB0byB0aGUgZW50cnkgZmlsZVxyXG4gICAgICAgICAgLy8gbGliL25lc3RlZC9mb28udHMgYmVjb21lcyAvcHJvamVjdC9saWIvbmVzdGVkL2Zvby50c1xyXG4gICAgICAgICAgZmlsZVVSTFRvUGF0aChuZXcgVVJMKGZpbGUsIGltcG9ydC5tZXRhLnVybCkpLFxyXG4gICAgICAgIF0pLFxyXG4gICAgICApLFxyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBhc3NldEZpbGVOYW1lczogXCJhc3NldHMvW25hbWVdW2V4dG5hbWVdXCIsXHJcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6IFwiW25hbWVdLmpzXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH1cclxufSkpOyJdLAogICJtYXBwaW5ncyI6ICI7QUFBeVIsU0FBUyxvQkFBb0I7QUFDdFQsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxrQkFBa0I7QUFDekIsU0FBUyxZQUFZO0FBQ3JCLFNBQVMsU0FBUyxVQUFVLGVBQWU7QUFDM0MsU0FBUyxxQkFBcUI7QUFSaUosSUFBTSwyQ0FBMkM7QUFVaE8sSUFBTSxFQUFFLFVBQVUsYUFBYSxJQUFJO0FBRW5DLElBQU8sc0JBQVEsYUFBYSxDQUFDLGVBQWU7QUFBQSxFQUMxQyxTQUFTO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixNQUFNO0FBQUEsTUFDSixPQUFPO0FBQUEsUUFDTCxTQUFTO0FBQUEsVUFDUDtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixXQUFXO0FBQUEsWUFDYjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsY0FBYztBQUFBLElBQ2QsSUFBSTtBQUFBLE1BQ0Ysa0JBQWtCO0FBQUEsTUFDbEIsU0FBUyxDQUFDLE1BQU07QUFBQSxJQUNsQixDQUFDO0FBQUEsSUFDRCxhQUFhO0FBQUEsTUFDWCxTQUFTLENBQUMscUJBQXFCO0FBQUEsTUFDL0IsU0FBUyxDQUFDLElBQUksU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQUEsSUFDdkMsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxrQkFBa0I7QUFBQSxFQUNwQjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLElBQ2YsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLE9BQU8sVUFBVTtBQUFBLE1BQ2hDLFNBQVMsQ0FBQyxJQUFJO0FBQUEsSUFDaEI7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxTQUFTLG1CQUFtQjtBQUFBLE1BQ3ZDLE9BQU8sT0FBTztBQUFBLFFBQ1osS0FBSyxLQUFLLG1CQUFtQixFQUFFLElBQUksQ0FBQyxTQUFTO0FBQUE7QUFBQTtBQUFBLFVBRzNDLFNBQVMsT0FBTyxLQUFLLE1BQU0sR0FBRyxLQUFLLFNBQVMsUUFBUSxJQUFJLEVBQUUsTUFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBLFVBR2pFLGNBQWMsSUFBSSxJQUFJLE1BQU0sd0NBQWUsQ0FBQztBQUFBLFFBQzlDLENBQUM7QUFBQSxNQUNIO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsRUFBRTsiLAogICJuYW1lcyI6IFtdCn0K
