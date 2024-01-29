import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'
import { EsLinter, linterPlugin, TypeScriptLinter } from "vite-plugin-linter";
import macrosPlugin from "vite-plugin-babel-macros"
import { glob } from "glob";
import { extname, relative, resolve } from "path";
import { fileURLToPath } from "node:url";

export default defineConfig((configEnv) => ({
  plugins: [
    macrosPlugin(),
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
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
      include: ['src/'],
      exclude: ["**/*.stories.tsx"] 
    }),
    linterPlugin({
      include: ["./src/**/*.ts", "./src/**/*.tsx"],
      linters: [new EsLinter({ configEnv: configEnv }), new TypeScriptLinter()],
    }),
  ],
  server: {
    host: true,
  },
  build: {
    lib: {
      entry: resolve('src', 'index.ts'),
      name: 'Ui LibrarygStorybook',
      formats: ['es'],
      fileName: (format) => `uiLibrary-storybook.${format}.js`,
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
          fileURLToPath(new URL(file, import.meta.url)),
        ]),
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
    }
  }
}));