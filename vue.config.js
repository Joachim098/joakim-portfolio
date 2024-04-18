const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pluginOptions: {
    vuetify: {
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
      "screenshots": [
        {
         "src": "/image1.png",
          "sizes": "397x818",
          "type": "image/png",
          "form_factor": "narrow",
          "label": "AJ Portfolio",
          "description": "Get in touch with me much more quicker by installing the app. \nPretty cool right?"
        }
    ]
    }
  }
})