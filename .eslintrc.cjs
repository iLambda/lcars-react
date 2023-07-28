// eslint-disable-next-line no-undef
module.exports = {
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { 
    ecmaVersion: 'latest', 
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module' 
  },
  plugins: ['react', 'react-refresh'],
  rules: {
    'react/button-has-type': 'error',
    'react/display-name': 'off',
    'react/hook-use-state': ['error', { 'allowDestructuredState': true }],
    'react/jsx-uses-react': 'off',
    'react/jsx-equals-spacing': 'error',
    'react/prefer-stateless-function': 'error',
    'react/react-in-jsx-scope': 'off',
    'react-refresh/only-export-components': 'warn',
    'no-extra-semi': 'error',
    '@typescript-eslint/no-unused-vars': [
      'warn', // or 'error'
      { 
        'argsIgnorePattern': '^_',
        'varsIgnorePattern': '^_',
        'caughtErrorsIgnorePattern': '^_'
      }
    ],
    'quotes': [
      'error', 'single', {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'semi': ['warn', 'always']
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};