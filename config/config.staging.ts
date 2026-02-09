import { defineConfig } from '@umijs/max';
import routes from './routes';

export default defineConfig({
  npmClient: 'yarn',
  clientLoader: {}, // 路由数据加载 https://umijs.org/docs/guides/client-loader
  history: {
    type: 'browser',
  },
  routes: routes,
  extraPostCSSPlugins: [
    require('postcss-px-to-viewport')({
      viewportWidth: 375,
      mediaQuery: true,
    }),
  ],
});
