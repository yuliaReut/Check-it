import dotenv from 'dotenv';
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {resolve} from 'path';

import environment from 'vite-plugin-environment';

dotenv.config();

export default defineConfig({
  base: '/Check-it/',
  plugins: [react(), environment('all')],
  define: {
    'process.env': process.env,
  },
  build: {
    outDir: 'build',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
});
