import { defineConfig } from 'tsup';
import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin';

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['cjs', 'esm'],
  dts: true,
  external: ['react'],
  esbuildPlugins: [vanillaExtractPlugin()],
  inject: ['./react-shim.ts'],
  splitting: false,
  clean: true,
  outDir: 'dist',
  sourcemap: true,
  // Ensure CSS is being handled
  loader: {
    '.css': 'css'
  }
});