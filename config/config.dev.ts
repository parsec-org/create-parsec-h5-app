import { defineConfig } from '@umijs/max';

export default defineConfig({
  define: {
    PUBLIC_URL: '/',
    REACT_APP_ENV: 'dev',
    // REACT_APP_API_HOST: 'http://127.0.0.1:4523/mock/769727', // mock地址
    REACT_APP_API_HOST: 'https://ccso-api.parsec.com.cn',
    REACT_APP_API_PREFIX: '/api', // 网络请求前缀
  },
  // devtool: false, // 禁用 sourcemap
  devtool: 'eval', //使用最低成本的 sourcemap 生成方式，默认是 cheap-module-source-map
});
