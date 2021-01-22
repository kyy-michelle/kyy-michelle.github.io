export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Michelle Yeung - Front End Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      { hid: 'robots', name: 'robots', content: 'noindex' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    'bootstrap-vue/nuxt', // Doc: https://bootstrap-vue.js.org/docs/
    '@nuxtjs/eslint-module',
    '@nuxtjs/markdownit',
    ['vue-scrollto/nuxt', { duration: 600 }],
  ],
  /*
   ** Build configuration
   */
  target: 'static',
  build: {
    extend(config, ctx) {},
  },
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false, // Or `bvCSS: false`
  },
  router: {
    linkActiveClass: '',
    linkExactActiveClass: 'active',
  },
}
