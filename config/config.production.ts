import { defineConfig } from '@umijs/max';

export default defineConfig({
  define: {
    UMI_ENV: 'production',
    PARSEC_APP_ENV: 'production',
    PARSEC_APP_STORAGE_PREFIX: 'parsec-app-production',
  },
});
