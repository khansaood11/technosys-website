import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'manifest.json', 'sw.js'],
      manifest: {
        name: 'Technosys Teleservices - High Speed Fiber & Enterprise ISP',
        short_name: 'Technosys',
        description: 'Sparkline Technosys Pvt Ltd (STPL) Ankleshwar premier high-speed fiber broadband, 1:1 dedicated leased line, and subscriber portal app.',
        theme_color: '#00F0FF',
        background_color: '#030712',
        display: 'standalone',
        orientation: 'portrait-primary',
        icons: [
          {
            src: 'https://technosysonline.com/wp-content/uploads/2024/08/cropped-logo-footer-00-png-scaled-192x192.webp',
            sizes: '192x192',
            type: 'image/webp',
            purpose: 'any'
          },
          {
            src: 'https://technosysonline.com/wp-content/uploads/2024/08/cropped-logo-footer-00-png-scaled-192x192.webp',
            sizes: '512x512',
            type: 'image/webp',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
  server: {
    port: 3000,
    open: true
  }
});
