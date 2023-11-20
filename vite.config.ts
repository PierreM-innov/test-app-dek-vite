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
            strategies: 'injectManifest',
            injectRegister: 'inline',
            injectManifest: {
                injectionPoint: undefined
            },
            manifest: {
                name: 'DK',
                short_name: 'App',
                theme_color: '#ffffff',
            },
            devOptions: {
                enabled: true,
                type: 'module',
            }
        })],
})
