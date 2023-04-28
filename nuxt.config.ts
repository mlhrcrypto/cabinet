export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  mode: 'universal',
  head: {
    title: 'Cabinet',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' }
    ],
  },
  modules: [
    'cookie-universal-nuxt',
    // '@nuxtjs/axios', 
  ],

  // axios: {
  //   proxy: true // Can be also an object with default options
  // },

  // proxy: {
  //   '/api/': 'http://127.0.0.1:8000/api'
  // },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~plugins/filters.ts",
    { src: '~/plugins/client.js', mode: 'client' },
    '~/plugins/vue-select',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  },
  css: [
    '~/styles/style.scss'
  ],

  serverMiddleware: [
    // 'redirect-ssl',
    '~/serverMiddleware/api', {
      path: "api",
      handler: "~/serverMiddleware/api"
    }
  ],
  router: {
    middleware: [
    ]
  },
  loading: {
    color: 'blue',
    height: '5px'
  },
  buildModules: ['@nuxt/typescript-build',  'nuxt-typed-vuex',],
  privateRuntimeConfig: {
    API_Key0: process.env[`NUXT_ENV_API_Key_0`],
    API_Key1: process.env[`NUXT_ENV_API_Key_1`],
  }
}
