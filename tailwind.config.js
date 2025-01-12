const path = require('path')

module.exports = {
  prefix: 'tw-',
  content: [path.join(__dirname, './src/**/*.(js|jsx|ts|tsx)')],
  darkMode: 'media',
  theme: {
    screens: {
      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
    },
    extend: {
      boxShadow: {
        '3xl': '0 2px 16px 0 rgb(0 0 0 / 50%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  daisyui: {},

  'tailwindCSS.emmetCompletions': true,
  'editor.inlineSuggest.enabled': true,
  'editor.quickSuggestions': {
    strings: true,
  },
  'css.validate': false,
}
