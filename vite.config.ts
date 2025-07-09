import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      external: ['firebase/app', 'firebase/firestore', 'firebase/storage'],
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom']
        },
        globals: {
          'firebase/app': 'firebase',
          'firebase/firestore': 'firestore',
          'firebase/storage': 'storage'
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['firebase', '@firebase/app', '@firebase/firestore', '@firebase/storage']
  }
}); 