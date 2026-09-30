// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
import rehypeRebase from './src/rehype-rebase.mjs';

export default defineConfig({
  site: 'https://fedecruz1981.github.io/msp-tutorials-es',
  base: '/msp-tutorials-es',
  integrations: [mdx({ rehypePlugins: [rehypeRebase] })],
  trailingSlash: 'always',
  build: {
    assets: 'assets',
  },
});