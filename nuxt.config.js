export default {
  target: 'static',
  router: {
    base: process.env.NODE_ENV !== 'production' ? '/gc-project/' : '/',
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
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: 'favicon-32x32.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: 'apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: 'favicon-16x16.png',
      },
      { rel: 'manifest', href: 'site.webmanifest' },
      { rel: 'mask-icon', href: 'safari-pinned-tab.svg', color: '#c89900' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'theme-color', content: '#ffffff' },
      {
        rel: 'stylesheet',
        href:
          'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css',
      },
    ],
  },

  css: ['@/assets/scss/main.scss', '@/assets/transition.css'],

  plugins: [
    '@/plugins/bootstrap.js',
    { src: '@/plugins/loadingSpinner.js', mode: 'client' },
  ],

  components: true,

  buildModules: ['@nuxtjs/eslint-module'],

  modules: [
    '@nuxtjs/style-resources',
    '@nuxt/content',
    'vue-scrollto/nuxt',
    '@nuxtjs/sitemap',
  ],

  styleResources: {
    scss: '@/assets/scss/_variables.scss',
  },

  build: {
    extractCSS: true,
  },

  sitemap: {
    hostname: 'https://jasonnchann24.github.io/gc-project',
    gzip: true,
  },
}
