// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// TODO: reemplazar por el dominio definitivo
export default defineConfig({
  site: 'https://axoluchin.github.io',
  base: '/lex-landing',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
