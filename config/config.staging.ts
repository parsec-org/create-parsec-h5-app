import { defineConfig } from 'umi';
import route from './route';

export default defineConfig({
  npmClient: 'yarn',
  clientLoader: {}, // 路由数据加载 https://umijs.org/docs/guides/client-loader
  history: {
    type: 'browser',
  },
  routes: route,
  extraPostCSSPlugins: [
    require('postcss-px-to-viewport')({
      viewportWidth: 375,
      mediaQuery: true,
    }),
  ],
});
