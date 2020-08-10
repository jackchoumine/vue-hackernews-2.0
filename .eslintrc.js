/* eslint-disable */
/*
 * @Description: eslint 配置
 * @Date: 2020-08-11 01:59:54 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-08-11 02:36:33 +0800
 * @LastEditors: JackChouMine
 */
module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  // NOTE 异步加载路由报错：Parsing error: Unexpected token import
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: '2018',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    quotes: [2, 'single'],
    semi: [2, 'never']
  }
};