import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import createSvgSpritePlugin from 'vite-plugin-svg-spriter';
import autoprefixer from 'autoprefixer';
import { resolve } from 'path';

export default defineConfig({
  //Set base path for deployment, set(update) correct repository name
  base: '/vite-test/',
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          //options
        }),
      ],
    },
  },

  // Make MPA Work
  build: {
    // Show source maps in the browser
    sourcemap: true,
    minify: true,
    cssMinify: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'pages/about/index.html'),
      },
    },
  },
  plugins: [
    // Optimize Images
    ViteImageOptimizer({
      jpg: {
        quality: 75,
      },
      png: {
        quality: 75,
      },
    }),
    // Create SVG Sprite
    createSvgSpritePlugin({
      svgFolder: './src/assets/images/svg/',
    }),
  ],
});
