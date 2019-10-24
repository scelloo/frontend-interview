module.exports = {
  root: true,
  env: {
    node: true,
  },
  "extends": ["plugin:vue/base"],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
    "parser": "vue-eslint-parser",
    "parserOptions": {
      "ecmaVersion": 7,
      "sourceType": "module"
  }
};
