import { defineConfig } from 'rolldown'


export default defineConfig([
  {
    input: 'src/main.ts',
    external: /(node:)|(unzip-stream)|(minimatch)/g,
    output: {
      dir: "./dist/"
    },
  },
  {
    input: './DOCUMENTATION/gen.mjs',
    external: /node:|unzip-stream/g,
    output: {
      dir: "./dist/"
    },
  },
  {
    input: './script-api/index.js',
    external: [
      /@minecraft/g
    ],
    output: {
      file: "script_api.js",
      dir: "./dist/"
    }
  }
]);