import { defineConfig } from '@umijs/max';
import routes from './routes';

const { REACT_APP_ENV, REACT_APP_API_HOST } = process.env;

console.log('REACT_APP_ENV:', REACT_APP_ENV);

export default defineConfig({
  npmClient: 'yarn',
  clientLoader: {}, // 路由数据加载 https://umijs.org/docs/guides/client-loader
  history: {
    type: 'browser',
  },
  define: {
    REACT_APP_ENV: REACT_APP_ENV || false,
    REACT_APP_API_HOST: REACT_APP_API_HOST || '',
  },
  routes: routes,
  autoprefixer: {
    overrideBrowserslist: [
      'Android 4.1',
      'iOS 7.1',
      'Chrome > 31',
      'ff > 31',
      'ie >= 8',
      'last 10 versions', // 所有主流浏览器最近10版本用
    ],
    grid: true,
  },
  postcssLoader: {},
  extraPostCSSPlugins: [
    require('postcss-px-to-viewport')({
      viewportWidth: 375, // 视口宽度，对应设计稿的宽度，一般是 375 或 750
      viewportHeight: 1334, // 视口高度，根据 750 设备的宽度来指定，一般指定 1334 也可以不配置
      unitPrecision: 3, // 指定 `px` 转换为视口单位值的小数位数
      viewportUnit: 'vw', // 指定需要转换成的视口单位，建议使用 vw
      selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视口单位的类，可以自定义，可以无限添加，建议定义一至两个通用的类名
      minPixelValue: 1, // 小于或等于 `1px` 不转换为视口单位，你也可以设置为你想要的值
      mediaQuery: true, // 允许在媒体查询中转换 `px`
    }),
  ],
  metas:[{
    name: 'viewport',
    content: 'width=device-width, initial-scale=1',
  }]
});
