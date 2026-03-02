import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const basePath = '/familie/alene-med-barn/minside';

export default defineConfig({
  plugins: [react()],
  base: `${basePath}/`,
  define: {
    'process.env.PUBLIC_URL': JSON.stringify(basePath),
  },
  build: {
    outDir: 'build',
    sourcemap: true,
  },
  server: {
    port: 5173,
    strictPort: true,
  },
});
