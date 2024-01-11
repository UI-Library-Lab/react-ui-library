import { resolve } from 'node:path'
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as packageJson from './package.json';
import tsConfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'
import EsLint from 'vite-plugin-linter'
import macrosPlugin from "vite-plugin-babel-macros"

const { EsLinter, linterPlugin } = EsLint

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
    }),
    linterPlugin({
      include: ['./src/**/*.{ts,tsx}'],
      linters: [new EsLinter({ configEnv })],
    }),
  ],
  server: {
    host: true,
  },
  build: {
    lib: {
      entry: resolve('src', 'index.ts'),
      name: 'Ui LibrarygStorybook',
      formats: ['es', 'umd'],
      fileName: (format) => `uiLibrary-storybook.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.dependencies)]
    }
  }
}));