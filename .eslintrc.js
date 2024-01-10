/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  root: true,
  plugins: ['unused-imports'],
  extends: ['next/core-web-vitals', 'next', 'prettier'],
  rules: {
    semi: 0,
    'unused-imports/no-unused-imports': 'error',
  },
}
