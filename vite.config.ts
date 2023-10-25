import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/leo-pictograms',
  plugins: [react(), VitePWA()],
  preview: {
    port: 8080,
    open: true,
  },
  server: {
    port: 7001,
    open: true,
  },
});
