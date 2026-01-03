import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/ManStore/',
    build: {
        outDir: 'dist_prod',
        emptyOutDir: true,
    }
})
