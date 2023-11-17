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
        })],
    build: {
        outDir: "./dist",
        lib: {
            entry: path.resolve("./firebase-messaging-sw.js"),
            fileName: "firebase-messaging-sw",
            formats: ["es"]
        },
        emptyOutDir: false
    },
})
