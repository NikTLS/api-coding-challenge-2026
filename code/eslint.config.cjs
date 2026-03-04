const eslint = require('@eslint/js')
const globals = require('globals')
const stylistic = require('@stylistic/eslint-plugin')

module.exports = [
  eslint.configs.recommended,
  stylistic.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.node,
        it: 'writeable',
        test: 'writeable',
        jest: 'writeable',
        describe: 'writeable',
        global: 'writeable',
        expect: 'writeable',
        afterEach: 'writeable',
        beforeEach: 'writeable',
        fetch: 'writeable',
      },
    },
    files: ['src/**/*.js', 'src/**/*.cjs', 'tests/**/*.cjs'],
  },
]
