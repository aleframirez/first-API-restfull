import globals from 'globals'
import pluginJs from '@eslint/js'

export default [
  {
    languageOptions: { globals: globals.browser },
    env: {
      node: true, // Esto definirá las variables globales de Node.js como `require`
    },
  },
  pluginJs.configs.recommended,
]
