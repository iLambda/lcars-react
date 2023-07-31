const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
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
        project: ['./tsconfig.json', './tsconfig.fix.json'],
        sourceType: 'module'
    },
    ignorePatterns: ['.eslintrc.cjs', 'esbuild.*.mjs', 'dist/**', 'fix/**.d.ts'],
    plugins: ['react', 'unused-imports'],
    rules: {
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/consistent-type-exports': ['error'],
        '@typescript-eslint/no-empty-interface': ['error', { 'allowSingleExtends': true }],
        '@typescript-eslint/strict-boolean-expressions': ['error', { 
            allowString: false,
            allowNumber: false,
        }],
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/member-delimiter-style': 'warn',
        '@typescript-eslint/method-signature-style': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-readonly': 'error',
        '@typescript-eslint/prefer-reduce-type-parameter': 'error',
        'linebreak-style': ['error', 'unix'],
        'react/button-has-type': 'error',
        'react/display-name': 'off',
        'react/hook-use-state': ['error', { 'allowDestructuredState': true }],
        'react/jsx-uses-react': 'off',
        'react/jsx-equals-spacing': 'error',
        'react/prefer-stateless-function': 'error',
        'react/react-in-jsx-scope': 'off',
        'no-extra-semi': 'error',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': ['warn',
            { 'vars': 'all', 'varsIgnorePattern': '^_', 'args': 'after-used', 'argsIgnorePattern': '^_' }
        ],
        'quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
        'semi': ['warn', 'always']
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
});