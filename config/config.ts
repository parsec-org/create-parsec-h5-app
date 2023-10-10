import { defineConfig, createBrowserHistory, IRoute } from 'umi';
import route from './route';


const { REACT_APP_ENV, REACT_APP_API_HOST } = process.env;

console.log('REACT_APP_ENV:', REACT_APP_ENV);


export default defineConfig({
  npmClient: 'yarn',
  clientLoader: {}, // 路由数据加载 https://umijs.org/docs/guides/client-loader
  history: {
    type: 'browser'
  },
  define: {
    REACT_APP_ENV: REACT_APP_ENV || false,
    REACT_APP_API_HOST: REACT_APP_API_HOST || '',
  },
  routes: route,
  extraPostCSSPlugins: [
    require("postcss-px-to-viewport")({
      viewportWidth: 375,
      mediaQuery: true
    })
  ],
});
