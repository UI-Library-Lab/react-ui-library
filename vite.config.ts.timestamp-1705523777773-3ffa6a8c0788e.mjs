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
      include: ["src/"],
      exclude: ["**/*.stories.tsx"]
    }),
    linterPlugin({
      include: ["./src/**/*.{ts,tsx}"],
      linters: [new EsLinter({ configEnv })]
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxIb21lXFxcXGRldlxcXFxwcm9qZWN0c1xcXFx1aS1saWJyYXJ5XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxIb21lXFxcXGRldlxcXFxwcm9qZWN0c1xcXFx1aS1saWJyYXJ5XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Ib21lL2Rldi9wcm9qZWN0cy91aS1saWJyYXJ5L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgdHNDb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJ1xyXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcclxuaW1wb3J0IEVzTGludCBmcm9tICd2aXRlLXBsdWdpbi1saW50ZXInXHJcbmltcG9ydCBtYWNyb3NQbHVnaW4gZnJvbSBcInZpdGUtcGx1Z2luLWJhYmVsLW1hY3Jvc1wiXHJcbmltcG9ydCB7IGdsb2IgfSBmcm9tIFwiZ2xvYlwiO1xyXG5pbXBvcnQgeyBleHRuYW1lLCByZWxhdGl2ZSwgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tIFwibm9kZTp1cmxcIjtcclxuXHJcbmNvbnN0IHsgRXNMaW50ZXIsIGxpbnRlclBsdWdpbiB9ID0gRXNMaW50XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKGNvbmZpZ0VudikgPT4gKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICBtYWNyb3NQbHVnaW4oKSxcclxuICAgIHJlYWN0KHtcclxuICAgICAgYmFiZWw6IHtcclxuICAgICAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgICBbXHJcbiAgICAgICAgICAgICdiYWJlbC1wbHVnaW4tc3R5bGVkLWNvbXBvbmVudHMnLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcHVyZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBuYW1lc3BhY2U6IFwidWlMaWJyYXJ5XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIF1cclxuICAgICAgfVxyXG4gICAgfSksIFxyXG4gICAgdHNDb25maWdQYXRocygpLFxyXG4gICAgZHRzKHtcclxuICAgICAgaW5zZXJ0VHlwZXNFbnRyeTogdHJ1ZSxcclxuICAgICAgaW5jbHVkZTogWydzcmMvJ10sXHJcbiAgICAgIGV4Y2x1ZGU6IFtcIioqLyouc3Rvcmllcy50c3hcIl0gXHJcbiAgICB9KSxcclxuICAgIGxpbnRlclBsdWdpbih7XHJcbiAgICAgIGluY2x1ZGU6IFsnLi9zcmMvKiovKi57dHMsdHN4fSddLFxyXG4gICAgICBsaW50ZXJzOiBbbmV3IEVzTGludGVyKHsgY29uZmlnRW52IH0pXSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICBob3N0OiB0cnVlLFxyXG4gIH0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIGxpYjoge1xyXG4gICAgICBlbnRyeTogcmVzb2x2ZSgnc3JjJywgJ2luZGV4LnRzJyksXHJcbiAgICAgIG5hbWU6ICdVaSBMaWJyYXJ5Z1N0b3J5Ym9vaycsXHJcbiAgICAgIGZvcm1hdHM6IFsnZXMnXSxcclxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGB1aUxpYnJhcnktc3Rvcnlib29rLiR7Zm9ybWF0fS5qc2AsXHJcbiAgICB9LFxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBleHRlcm5hbDogW1wicmVhY3RcIiwgXCJyZWFjdC9qc3gtcnVudGltZVwiXSxcclxuICAgICAgaW5wdXQ6IE9iamVjdC5mcm9tRW50cmllcyhcclxuICAgICAgICBnbG9iLnN5bmMoXCJzcmMvKiovKi57dHMsdHN4fVwiKS5tYXAoKGZpbGUpID0+IFtcclxuICAgICAgICAgIC8vIFRoZSBuYW1lIG9mIHRoZSBlbnRyeSBwb2ludFxyXG4gICAgICAgICAgLy8gbGliL25lc3RlZC9mb28udHMgYmVjb21lcyBuZXN0ZWQvZm9vXHJcbiAgICAgICAgICByZWxhdGl2ZShcInNyY1wiLCBmaWxlLnNsaWNlKDAsIGZpbGUubGVuZ3RoIC0gZXh0bmFtZShmaWxlKS5sZW5ndGgpKSxcclxuICAgICAgICAgIC8vIFRoZSBhYnNvbHV0ZSBwYXRoIHRvIHRoZSBlbnRyeSBmaWxlXHJcbiAgICAgICAgICAvLyBsaWIvbmVzdGVkL2Zvby50cyBiZWNvbWVzIC9wcm9qZWN0L2xpYi9uZXN0ZWQvZm9vLnRzXHJcbiAgICAgICAgICBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoZmlsZSwgaW1wb3J0Lm1ldGEudXJsKSksXHJcbiAgICAgICAgXSksXHJcbiAgICAgICksXHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiBcImFzc2V0cy9bbmFtZV1bZXh0bmFtZV1cIixcclxuICAgICAgICBlbnRyeUZpbGVOYW1lczogXCJbbmFtZV0uanNcIixcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9XHJcbn0pKTsiXSwKICAibWFwcGluZ3MiOiAiO0FBQXlSLFNBQVMsb0JBQW9CO0FBQ3RULE9BQU8sV0FBVztBQUNsQixPQUFPLG1CQUFtQjtBQUMxQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sa0JBQWtCO0FBQ3pCLFNBQVMsWUFBWTtBQUNyQixTQUFTLFNBQVMsVUFBVSxlQUFlO0FBQzNDLFNBQVMscUJBQXFCO0FBUmlKLElBQU0sMkNBQTJDO0FBVWhPLElBQU0sRUFBRSxVQUFVLGFBQWEsSUFBSTtBQUVuQyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxlQUFlO0FBQUEsRUFDMUMsU0FBUztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsTUFBTTtBQUFBLE1BQ0osT0FBTztBQUFBLFFBQ0wsU0FBUztBQUFBLFVBQ1A7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sV0FBVztBQUFBLFlBQ2I7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELGNBQWM7QUFBQSxJQUNkLElBQUk7QUFBQSxNQUNGLGtCQUFrQjtBQUFBLE1BQ2xCLFNBQVMsQ0FBQyxNQUFNO0FBQUEsTUFDaEIsU0FBUyxDQUFDLGtCQUFrQjtBQUFBLElBQzlCLENBQUM7QUFBQSxJQUNELGFBQWE7QUFBQSxNQUNYLFNBQVMsQ0FBQyxxQkFBcUI7QUFBQSxNQUMvQixTQUFTLENBQUMsSUFBSSxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFBQSxJQUN2QyxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU8sUUFBUSxPQUFPLFVBQVU7QUFBQSxNQUNoQyxNQUFNO0FBQUEsTUFDTixTQUFTLENBQUMsSUFBSTtBQUFBLE1BQ2QsVUFBVSxDQUFDLFdBQVcsdUJBQXVCLE1BQU07QUFBQSxJQUNyRDtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLFNBQVMsbUJBQW1CO0FBQUEsTUFDdkMsT0FBTyxPQUFPO0FBQUEsUUFDWixLQUFLLEtBQUssbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFNBQVM7QUFBQTtBQUFBO0FBQUEsVUFHM0MsU0FBUyxPQUFPLEtBQUssTUFBTSxHQUFHLEtBQUssU0FBUyxRQUFRLElBQUksRUFBRSxNQUFNLENBQUM7QUFBQTtBQUFBO0FBQUEsVUFHakUsY0FBYyxJQUFJLElBQUksTUFBTSx3Q0FBZSxDQUFDO0FBQUEsUUFDOUMsQ0FBQztBQUFBLE1BQ0g7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixFQUFFOyIsCiAgIm5hbWVzIjogW10KfQo=
