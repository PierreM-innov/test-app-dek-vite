import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from "vite-plugin-pwa";
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(),
        basicSsl(),
        VitePWA({
            strategies: 'injectManifest',
            injectManifest: {
                rollupFormat: 'iife',
            },
            registerType: 'autoUpdate',
            srcDir: 'src',
            filename: 'sw.ts',

            devOptions: {
                enabled: true
            },
        })],
})
