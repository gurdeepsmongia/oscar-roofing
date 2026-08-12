// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://oscarroofingcanada.ca',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()],

  // Cloudflare Pages' build step auto-detects Astro and, if no Cloudflare adapter is
  // present, silently runs `astro add cloudflare` itself during deploy — installing
  // this same adapter but defaulting `imageService` to `cloudflare-binding`, which
  // needs a Cloudflare Images "IMAGES" binding to transform images at request time.
  // That produced 404s on every image since nothing serves that endpoint. Installing
  // the adapter ourselves with `imageService: 'passthrough'` heads that off: images
  // are served as plain static files, at build time and at runtime, with no binding
  // and no on-demand transform involved.
  adapter: cloudflare({
    imageService: 'passthrough',
    // Default prerendering uses Cloudflare's workerd runtime locally, which requires
    // macOS 13.5+ (this build machine is older) or Linux. 'node' uses Astro's plain
    // Node prerenderer instead — same static output, works everywhere.
    prerenderEnvironment: 'node',
  }),
});
