// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://msp-tutorials-es.vercel.app',
  integrations: [mdx()],
  trailingSlash: 'always',
  build: {
    assets: 'assets',
  },
});