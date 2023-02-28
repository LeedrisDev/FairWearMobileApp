import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
// @ts-ignore
import manifest from './public/manifest.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      VitePWA({
          registerType: 'autoUpdate',
          devOptions: {
              enabled: true
          },
          manifest,
      })
  ],
})
