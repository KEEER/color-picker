module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'array-bracket-spacing': [ 'error', 'always' ],
    'comma-dangle': [ 'error', 'always-multiline' ],
    'comma-spacing': 'error',
    'indent': [ 'error', 2 ],
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'linebreak-style': [ 'error', 'unix' ],
    'no-console': 'off',
    'no-extra-semi': 'off',
    'no-multi-spaces': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'off',
    'no-unused-vars': 'warn',
    'object-curly-spacing': [ 'error', 'always' ],
    'quotes': [ 'error', 'single' ],
    'semi': [ 'error', 'never', { beforeStatementContinuationChars: 'always' } ],
    'space-before-blocks': [ 'error', 'always' ],
    'space-before-function-paren': [ 'error', 'always' ],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': [ 'error', 'always', { exceptions: [ '*' ] } ],
  }
}
