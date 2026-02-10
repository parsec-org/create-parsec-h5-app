import { defineConfig } from '@umijs/max';

export default defineConfig({
  define: {
    UMI_ENV: 'staging',
    PARSEC_APP_ENV: 'staging',
    PARSEC_APP_STORAGE_PREFIX: 'parsec-app-staging',
  },
});
