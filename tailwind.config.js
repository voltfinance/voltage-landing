const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx}', 'index.html'],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' }
    },
    colors: {
      navy: '#071927',
      gray: '#F7F8FA',
      lightBlue: '#063B64',
      purple: '#7A159A'
    },
    fontFamily: {
      sans: [
        'SF Pro Display',
        ...defaultTheme.fontFamily.sans
      ]
      // sans: ['SF Pro Display', 'sans-serif']
    },
    extend: {
      // spacing: {
      //   '8xl': '96rem',
      //   '9xl': '128rem',
      // },
      // borderRadius: {
      //   '4xl': '2rem',
      // }
    },
    corePlugins: {
      preflight: false
    }
  }
}
