import { defineConfig } from '@umijs/max';

export default defineConfig({
  define: {
    PUBLIC_URL: '/',
    PARSEC_APP_ENV: 'dev',
    PARSEC_APP_STORAGE_PREFIX: 'parsec-app-dev',
    // PARSEC_APP_API_HOST: 'http://127.0.0.1:4523/mock/769727', // mock地址
    PARSEC_APP_API_HOST: 'https://ccso-api.parsec.com.cn',
    PARSEC_APP_API_PREFIX: '/api', // 网络请求前缀
  },
});
