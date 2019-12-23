module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['reset.css', 'flex.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-url': {},
        'postcss-aspect-ratio-mini': {},
        'postcss-write-svg': {
          utf8: false
        },
        'postcss-preset-env': {},
        'postcss-px-to-viewport': {
          viewportWidth: 375,
          viewportHeight: 667,
          unitPrecision: 1,
          viewportUnit: 'vw',
          selectorBlackList: ['.ignore', '.hairlines', '.van'],
          minPixelValue: 1,
          mediaQuery: false
        },
        'postcss-viewport-units': {},
        cssnano: {
          preset: 'advanced',
          autoprefixer: false,
          'postcss-zindex': false
        }
      }
    },
    extend(config, ctx) {}
  }
}
