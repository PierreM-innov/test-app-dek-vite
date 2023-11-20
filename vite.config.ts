import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from "vite-plugin-pwa";
import basicSsl from '@vitejs/plugin-basic-ssl'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({

    plugins: [react(),
        basicSsl(),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
            injectRegister: 'inline',
            manifest: {
                name: 'Your App Name',
                short_name: 'App',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: 'path/to/icon.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                ],
            }
        })],
})
