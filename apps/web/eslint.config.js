import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';

export default [
  {
    ignores: ['dist/**', 'build/**', '**/node_modules/**'],
  },
  js.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  reactHooks.configs['recommended-latest'],
  importPlugin.flatConfigs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        alias: {
          map: [['@', './src']],
          extensions: ['.js', '.jsx', '.json'],
        },
      },
    },
    rules: {
      // This codebase is plain JS React (no PropTypes, no TS) — enforcing
      // prop-types would flag every component in the project for a pattern
      // that was never in use here.
      'react/prop-types': 'off',
      'react/no-unescaped-entities': 'off',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'import/no-unresolved': 'error',
      'import/named': 'off',
      'import/no-named-as-default-member': 'off',
      // These three walk the actual export map of every imported module
      // (including third-party packages). Several deps here (e.g. vite)
      // ship an `exports` map the resolver can't fully walk, which crashes
      // the rule outright rather than just reporting a lint error — so they
      // stay off. `no-unresolved` above still catches typo'd/missing paths.
      'import/namespace': 'off',
      'import/default': 'off',
      'import/export': 'off',
      'import/no-named-as-default': 'off',
    },
  },
];
