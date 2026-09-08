import { defineConfig } from 'astro/config';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // Ceci dit à Sass de toujours chercher les fichiers à partir de la racine du projet
          loadPaths: [resolve(__dirname, './')],
        },
      },
    },
  }
});