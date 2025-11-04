// .eslintrc.js 예시
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true, // 여기 추가
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 'off',
    'no-unused-vars': 'off',
  },
};
