import { defineConfig } from 'astro/config'
import storyblok from '@storyblok/astro'
import tailwind from '@astrojs/tailwind'
import basicSsl from '@vitejs/plugin-basic-ssl'
import vue from '@astrojs/vue'

// https://astro.build/config
export default defineConfig({
  integrations: [
    storyblok({
      accessToken: 'Gba8ER5B7POJ9gjwteGduAtt', // replace with your access token
      // apiOptions: { region: 'us' }, // if your space is located in the US
      components: {
        page: 'storyblok/Page',
        feature: 'storyblok/Feature',
        grid: 'storyblok/Grid',
        teaser: 'storyblok/Teaser',
        tabbed_content: 'storyblok/TabbedContent',
      },
    }),
    tailwind(),
    vue(),
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
})
