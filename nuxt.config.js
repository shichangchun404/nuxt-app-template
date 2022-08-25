const { resolve } = require("path");
const config = require("./config/index");
console.table(config);

module.exports = {
  plugins: [
    '@/plugins/inject-vue'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "@nuxtjs/router",
      {
        path: resolve(__dirname, "./src/router/"),
        fileName: "index.js"
      }
    ],
    "@nuxtjs/axios",
  ],
  build: {
    transpile: [],
  }
}
