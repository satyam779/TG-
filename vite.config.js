import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  assetsInclude: ["**/*.pdf", "**/*.docx", "**/*.mp4"],
  server: {
    proxy: {
      '/wp-json': {
        target: 'https://www.techyguide.in',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path
      }
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-supabase': ['@supabase/supabase-js'],
          'vendor-lottie': ['lottie-web/build/player/lottie_light']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})
