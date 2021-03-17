export default {
  target: 'static',

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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
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
