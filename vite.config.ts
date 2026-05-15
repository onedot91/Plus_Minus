import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  server: {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    hmr: process.env.DISABLE_HMR !== 'true',
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) {
            return undefined;
          }
          if (id.includes('react') || id.includes('scheduler')) {
            return 'vendor-react';
          }
          if (id.includes('motion') || id.includes('framer-motion')) {
            return 'vendor-motion';
          }
          if (id.includes('howler') || id.includes('lucide-react')) {
            return 'vendor-ui';
          }
          return 'vendor';
        },
      },
    },
  },
});
