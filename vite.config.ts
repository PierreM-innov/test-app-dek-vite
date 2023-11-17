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
            strategies: 'injectManifest',
            injectRegister: null,
            registerType: 'autoUpdate',
            devOptions: {
                enabled: true,
                type: 'module',
                navigateFallback: 'index.html'
            },
            workbox: {
                sourcemap: true
            }
        })],
})
