import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Define base URL for production build if necessary (usually not needed for standard SPA)
  // base: '/', 
  
  // Build configuration
  build: {
    outDir: 'dist', // Output directory
    sourcemap: false, // Disable sourcemaps for faster build in production environments, set to true if needed for debugging
    
    // Customize rollup options
    rollupOptions: {
      output: {
        // Simple asset categorization for cleaner 'dist' folder
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'assets/css/[name]-[hash][extname]';
          }
          if (assetInfo.name.match(/\.(png|jpe?g|gif|svg|webp|ico)$/)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },

  // Server configuration for development
  server: {
    port: 3000,
    open: true, // Automatically open the browser
  },
  
  // Resolve configuration (helpful for cleaner imports using alias)
  resolve: {
    alias: {
      '@': '/src', // Allows import 'Component' from '@/components/Component'
    },
  },
})