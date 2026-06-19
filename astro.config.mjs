import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  compressHTML: true,
  build: {
    assets: 'assets'
  },
  vite: {
  server: {
    allowedHosts: [
      '.trycloudflare.com'
    ]
  }
}
});
