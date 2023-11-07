const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },
  pwa: {
    themeColor: 'black',
    msTileColor: 'black',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions:{
      "name": "AJ Portfolio",
      "short_name": "AJPortfolio",
      "description": "Hola! Welcome to my Portfolio",
      "start_url": ".",
      "display": "standalone",
      "background_color": "black",
      "theme_color": "black",
      "orientation": "portrait-primary",
    }
  }
})
