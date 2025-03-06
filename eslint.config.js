// import js from "@eslint/js";
// import prettier from "eslint-config-prettier";
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
// import tseslint from "typescript-eslint";

export default {
  plugins: {
    react: eslintPluginReact,
    'react-hooks': eslintPluginReactHooks,
    import: eslintPluginImport,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    camelcase: ['error', { properties: 'always' }],
    'padded-blocks': ['error', 'never'],
    'no-trailing-spaces': 'error',
    'import/order': ['error', { alphabetize: { order: 'asc' } }],
    'no-unused-vars': 'warn',
    'prefer-const': 'error',
    semi: ['error', 'always'],
    indent: ['error', 2],
    'no-multi-spaces': ['error'],
    'no-return-assign': ['error', 'always'],
    'no-plusplus': ['error'],
    'operator-assignment': ['error', 'always'],
    'brace-style': ['error', '1tbs'],
    'eol-last': ['error', 'always'],
    'import/newline-after-import': ['error', { count: 1 }],
    'consistent-return': ['error'],
    'space-before-blocks': ['error', 'always'],
    'no-spaced-func': ['error'],
    'func-call-spacing': ['error', 'never'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'object-curly-spacing': ['error', 'always'],
    'keyword-spacing': ['error', { before: true, after: true }],
    quotes: ['error', 'single'],
    eqeqeq: ['error', 'always'],
    'quote-props': ['error', 'as-needed'],

  },
  ignores: ['node_modules', 'dist', 'build'],
};
