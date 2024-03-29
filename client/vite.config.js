import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import million from 'million/compiler';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },
  build: {
    outDir: 'build', // Specify the output directory for build artifacts
  },
  plugins: [
    million({ auto: true }), // Include the million.js plugin directly
    react(),
  ],
});
