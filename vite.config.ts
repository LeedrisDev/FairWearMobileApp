import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'
import {} from 'vite-plugin-pwa'
import mkcert from 'vite-plugin-mkcert'
// @ts-ignore
import manifest from './public/manifest.json'

// https://vitejs.dev/config/

export default defineConfig({
    server: { https: true },
    plugins: [
        mkcert(),
        react(),
        VitePWA({
            registerType: "prompt",
            includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
            manifest: {
                name: "FairWearApp",
                short_name: "FairWear",
                description: "Scanner for environmental and ethical clothing.",
                icons: [
                    {
                        src: "logo192.png",
                        type: "image/png",
                        sizes: "192x192"
                    },
                    {
                        src: "logo512.png",
                        type: "image/png",
                        sizes: "512x512"
                    },
                    {
                        src: "logo512.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "any maskable"
                    }

                ],
                theme_color: "#ffffff",
                background_color: "#e8ebf2",
                display: "standalone",
                scope: "/",
                start_url: "/",
                orientation: "portrait",
            },
            devOptions: {
                enabled: true,
                type: 'module',
            },

        })
    ],
})