import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
    open: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@routes': path.resolve(__dirname, './src/routes/routes.ts'),
    },
  },
  plugins: [react()],
});
