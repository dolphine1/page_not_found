export default defineNuxtConfig({
  // Global page headers
  app: {
    head: {
      title: 'Football Jersey Collection',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { key: 'description', name: 'description', content: 'Your premium football jersey collection website' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
        }
      ]
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  // Global CSS
  css: [
    '~/assets/css/main.css'
  ],
  // Plugins to run before rendering page
  plugins: [
    '~/plugins/smooth-scroll.client.js'
  ],
  // Auto import components
  components: true,
  // Build Configuration
  build: {
    // You can extend webpack config here
  },
  // Development tools
  devtools: { enabled: true },
  // Compatibility date
  compatibilityDate: '2024-11-01'
})