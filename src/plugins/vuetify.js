// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

let customTheme = {
  dark: false,
  colors: {
    main: '#000000',
    trans: '#FFFFFF00',
    primary: '#FF6F00',
    secondary: '#FFFFFF',
    info: '#FAFAFA',
    reserve: '#0b2b39'
  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme,
    }
  }
})
