import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  base: '/online-zoo/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contacts: resolve(__dirname, 'src/pages/contacts/index.html'),
        map: resolve(__dirname, 'src/pages/map/index.html'),
        zoos: resolve(__dirname, 'src/pages/zoos/index.html'),
        landing: resolve(__dirname, 'index.html'),
      },
    },
  },
});
