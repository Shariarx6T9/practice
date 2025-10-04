import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Force Vite to re-resolve the external dependencies
  optimizeDeps: {
    include: [
      'react-router-dom', 
      'react-hot-toast', 
      'react-countup', 
      'recharts'
    ],
  },
});