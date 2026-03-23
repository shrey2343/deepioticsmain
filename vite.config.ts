import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync } from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['lucide-react']
        }
      }
    }
  },
  plugins: [
    react(),
    {
      name: 'copy-200-html',
      closeBundle() {
        try {
          copyFileSync('dist/index.html', 'dist/200.html');
        } catch (e) {
          console.log('200.html copy skipped');
        }
      }
    }
  ],
  server: {
    port: 3000,
    host: true
  }
});
