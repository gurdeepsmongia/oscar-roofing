// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://oscarroofingcanada.ca',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()],

  // The default `sharp` image service needs a native binary that Cloudflare Pages'
  // build environment doesn't reliably provide. When it's unavailable, Astro falls
  // back to a runtime `/_image` transform endpoint — which doesn't exist on a static
  // host, so every image 404s. `passthroughImageService` skips native image
  // processing entirely and serves the source files directly, which always works on
  // any static host regardless of build-environment support for sharp.
  image: {
    service: passthroughImageService(),
  },
});