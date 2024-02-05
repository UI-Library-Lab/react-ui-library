// vite.config.ts
import { defineConfig } from "file:///C:/Home/dev/projects/ui-library/react-ui-library/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Home/dev/projects/ui-library/react-ui-library/node_modules/@vitejs/plugin-react/dist/index.mjs";
import tsConfigPaths from "file:///C:/Home/dev/projects/ui-library/react-ui-library/node_modules/vite-tsconfig-paths/dist/index.mjs";
import dts from "file:///C:/Home/dev/projects/ui-library/react-ui-library/node_modules/vite-plugin-dts/dist/index.mjs";
import { EsLinter, linterPlugin, TypeScriptLinter } from "file:///C:/Home/dev/projects/ui-library/react-ui-library/node_modules/vite-plugin-linter/dist/index.mjs";
import macrosPlugin from "file:///C:/Home/dev/projects/ui-library/react-ui-library/node_modules/vite-plugin-babel-macros/dist/plugin.js";
import { glob } from "file:///C:/Home/dev/projects/ui-library/react-ui-library/node_modules/glob/dist/esm/index.js";
import { extname, relative, resolve } from "path";
import { fileURLToPath } from "node:url";
var __vite_injected_original_import_meta_url = "file:///C:/Home/dev/projects/ui-library/react-ui-library/vite.config.ts";
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
      include: ["src/"],
      exclude: ["**/*.stories.tsx"]
    }),
    linterPlugin({
      include: ["./src/**/*.ts", "./src/**/*.tsx"],
      linters: [new EsLinter({ configEnv }), new TypeScriptLinter()]
    })
  ],
  server: {
    host: true
  },
  build: {
    lib: {
      entry: resolve("src", "index.ts"),
      name: "Ui LibrarygStorybook",
      formats: ["es"],
      fileName: (format) => `uiLibrary-storybook.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      input: Object.fromEntries(
        glob.sync("src/**/*.{ts,tsx}").map((file) => [
          // The name of the entry point
          // lib/nested/foo.ts becomes nested/foo
          relative("src", file.slice(0, file.length - extname(file).length)),
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxIb21lXFxcXGRldlxcXFxwcm9qZWN0c1xcXFx1aS1saWJyYXJ5XFxcXHJlYWN0LXVpLWxpYnJhcnlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXEhvbWVcXFxcZGV2XFxcXHByb2plY3RzXFxcXHVpLWxpYnJhcnlcXFxccmVhY3QtdWktbGlicmFyeVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovSG9tZS9kZXYvcHJvamVjdHMvdWktbGlicmFyeS9yZWFjdC11aS1saWJyYXJ5L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgdHNDb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJ1xyXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcclxuaW1wb3J0IHsgRXNMaW50ZXIsIGxpbnRlclBsdWdpbiwgVHlwZVNjcmlwdExpbnRlciB9IGZyb20gXCJ2aXRlLXBsdWdpbi1saW50ZXJcIjtcclxuaW1wb3J0IG1hY3Jvc1BsdWdpbiBmcm9tIFwidml0ZS1wbHVnaW4tYmFiZWwtbWFjcm9zXCJcclxuaW1wb3J0IHsgZ2xvYiB9IGZyb20gXCJnbG9iXCI7XHJcbmltcG9ydCB7IGV4dG5hbWUsIHJlbGF0aXZlLCByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gXCJub2RlOnVybFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKChjb25maWdFbnYpID0+ICh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgbWFjcm9zUGx1Z2luKCksXHJcbiAgICByZWFjdCh7XHJcbiAgICAgIGJhYmVsOiB7XHJcbiAgICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgICAgW1xyXG4gICAgICAgICAgICAnYmFiZWwtcGx1Z2luLXN0eWxlZC1jb21wb25lbnRzJyxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHB1cmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgbmFtZXNwYWNlOiBcInVpTGlicmFyeVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgIH0pLCBcclxuICAgIHRzQ29uZmlnUGF0aHMoKSxcclxuICAgIGR0cyh7XHJcbiAgICAgIGluc2VydFR5cGVzRW50cnk6IHRydWUsXHJcbiAgICAgIGluY2x1ZGU6IFsnc3JjLyddLFxyXG4gICAgICBleGNsdWRlOiBbXCIqKi8qLnN0b3JpZXMudHN4XCJdIFxyXG4gICAgfSksXHJcbiAgICBsaW50ZXJQbHVnaW4oe1xyXG4gICAgICBpbmNsdWRlOiBbXCIuL3NyYy8qKi8qLnRzXCIsIFwiLi9zcmMvKiovKi50c3hcIl0sXHJcbiAgICAgIGxpbnRlcnM6IFtuZXcgRXNMaW50ZXIoeyBjb25maWdFbnY6IGNvbmZpZ0VudiB9KSwgbmV3IFR5cGVTY3JpcHRMaW50ZXIoKV0sXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIHNlcnZlcjoge1xyXG4gICAgaG9zdDogdHJ1ZSxcclxuICB9LFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBsaWI6IHtcclxuICAgICAgZW50cnk6IHJlc29sdmUoJ3NyYycsICdpbmRleC50cycpLFxyXG4gICAgICBuYW1lOiAnVWkgTGlicmFyeWdTdG9yeWJvb2snLFxyXG4gICAgICBmb3JtYXRzOiBbJ2VzJ10sXHJcbiAgICAgIGZpbGVOYW1lOiAoZm9ybWF0KSA9PiBgdWlMaWJyYXJ5LXN0b3J5Ym9vay4ke2Zvcm1hdH0uanNgLFxyXG4gICAgfSxcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgZXh0ZXJuYWw6IFtcInJlYWN0XCIsIFwicmVhY3QvanN4LXJ1bnRpbWVcIl0sXHJcbiAgICAgIGlucHV0OiBPYmplY3QuZnJvbUVudHJpZXMoXHJcbiAgICAgICAgZ2xvYi5zeW5jKFwic3JjLyoqLyoue3RzLHRzeH1cIikubWFwKChmaWxlKSA9PiBbXHJcbiAgICAgICAgICAvLyBUaGUgbmFtZSBvZiB0aGUgZW50cnkgcG9pbnRcclxuICAgICAgICAgIC8vIGxpYi9uZXN0ZWQvZm9vLnRzIGJlY29tZXMgbmVzdGVkL2Zvb1xyXG4gICAgICAgICAgcmVsYXRpdmUoXCJzcmNcIiwgZmlsZS5zbGljZSgwLCBmaWxlLmxlbmd0aCAtIGV4dG5hbWUoZmlsZSkubGVuZ3RoKSksXHJcbiAgICAgICAgICAvLyBUaGUgYWJzb2x1dGUgcGF0aCB0byB0aGUgZW50cnkgZmlsZVxyXG4gICAgICAgICAgLy8gbGliL25lc3RlZC9mb28udHMgYmVjb21lcyAvcHJvamVjdC9saWIvbmVzdGVkL2Zvby50c1xyXG4gICAgICAgICAgZmlsZVVSTFRvUGF0aChuZXcgVVJMKGZpbGUsIGltcG9ydC5tZXRhLnVybCkpLFxyXG4gICAgICAgIF0pLFxyXG4gICAgICApLFxyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBhc3NldEZpbGVOYW1lczogXCJhc3NldHMvW25hbWVdW2V4dG5hbWVdXCIsXHJcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6IFwiW25hbWVdLmpzXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfVxyXG59KSk7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUE4VSxTQUFTLG9CQUFvQjtBQUMzVyxPQUFPLFdBQVc7QUFDbEIsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsVUFBVSxjQUFjLHdCQUF3QjtBQUN6RCxPQUFPLGtCQUFrQjtBQUN6QixTQUFTLFlBQVk7QUFDckIsU0FBUyxTQUFTLFVBQVUsZUFBZTtBQUMzQyxTQUFTLHFCQUFxQjtBQVJxTCxJQUFNLDJDQUEyQztBQVVwUSxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxlQUFlO0FBQUEsRUFDMUMsU0FBUztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsTUFBTTtBQUFBLE1BQ0osT0FBTztBQUFBLFFBQ0wsU0FBUztBQUFBLFVBQ1A7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sV0FBVztBQUFBLFlBQ2I7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELGNBQWM7QUFBQSxJQUNkLElBQUk7QUFBQSxNQUNGLGtCQUFrQjtBQUFBLE1BQ2xCLFNBQVMsQ0FBQyxNQUFNO0FBQUEsTUFDaEIsU0FBUyxDQUFDLGtCQUFrQjtBQUFBLElBQzlCLENBQUM7QUFBQSxJQUNELGFBQWE7QUFBQSxNQUNYLFNBQVMsQ0FBQyxpQkFBaUIsZ0JBQWdCO0FBQUEsTUFDM0MsU0FBUyxDQUFDLElBQUksU0FBUyxFQUFFLFVBQXFCLENBQUMsR0FBRyxJQUFJLGlCQUFpQixDQUFDO0FBQUEsSUFDMUUsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUEsTUFDSCxPQUFPLFFBQVEsT0FBTyxVQUFVO0FBQUEsTUFDaEMsTUFBTTtBQUFBLE1BQ04sU0FBUyxDQUFDLElBQUk7QUFBQSxNQUNkLFVBQVUsQ0FBQyxXQUFXLHVCQUF1QixNQUFNO0FBQUEsSUFDckQ7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxTQUFTLG1CQUFtQjtBQUFBLE1BQ3ZDLE9BQU8sT0FBTztBQUFBLFFBQ1osS0FBSyxLQUFLLG1CQUFtQixFQUFFLElBQUksQ0FBQyxTQUFTO0FBQUE7QUFBQTtBQUFBLFVBRzNDLFNBQVMsT0FBTyxLQUFLLE1BQU0sR0FBRyxLQUFLLFNBQVMsUUFBUSxJQUFJLEVBQUUsTUFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBLFVBR2pFLGNBQWMsSUFBSSxJQUFJLE1BQU0sd0NBQWUsQ0FBQztBQUFBLFFBQzlDLENBQUM7QUFBQSxNQUNIO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsRUFBRTsiLAogICJuYW1lcyI6IFtdCn0K
