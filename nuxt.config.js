export default {
  target: 'static',
  router: {
    base: '/gc-project/',
  },

  head: {
    title: 'gc-project',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css',
      },
    ],
  },

  css: ['@/assets/scss/main.scss'],

  plugins: ['@/plugins/bootstrap.js'],

  components: true,

  buildModules: ['@nuxtjs/eslint-module'],

  modules: ['@nuxtjs/style-resources'],

  styleResources: {
    scss: '@/assets/scss/_variables.scss',
  },

  build: {
    extractCSS: true,
  },
}
