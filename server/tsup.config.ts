import { defineConfig } from 'tsup';

export default defineConfig({
  entry: { vercel: 'src/vercel.ts' },
  format: ['esm'],
  platform: 'node',
  target: 'node20',
  outDir: 'dist',
  clean: true,
  // inline shared/ code (npm packages stay external)
  noExternal: [/^@shared/],
  // files in ../shared import "zod", which would otherwise be looked up
  // from the repo root, not server/node_modules
  esbuildOptions(options) {
    options.nodePaths = ['./node_modules'];
  },
});
