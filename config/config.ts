import { defineConfig } from '@umijs/max';
import routes from './routes';

export default defineConfig({
  npmClient: 'yarn',
  clientLoader: {}, // 路由数据加载 https://umijs.org/docs/guides/client-loader
  history: {
    type: 'browser',
  },
  define: {
    PARSEC_APP_STORAGE_PREFIX: 'parsec-app',
  },
  routes: routes,
  forget: {},
  clickToComponent: {},
  layout: false,
  /**
   * @name 数据流插件
   * @@doc https://umijs.org/docs/max/data-flow
   */
  // model: {},
  /**
   * 一个全局的初始数据流，可以用它在插件之间共享数据
   * @description 可以用来存放一些全局的数据，比如用户信息，或者一些全局的状态，全局初始状态在整个 Umi 项目的最开始创建。
   * @doc https://umijs.org/docs/max/data-flow#%E5%85%A8%E5%B1%80%E5%88%9D%E5%A7%8B%E7%8A%B6%E6%80%81
   */
  // initialState: {},
  /**
   * @name 网络请求配置
   * @description 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
   * @doc https://umijs.org/docs/max/request
   */
  request: {}, // 关键：启用 request 插件
  /**
   * @name 快速热更新配置
   * @description 一个不错的热更新组件，更新时可以保留 state
   */
  fastRefresh: true,
  mfsu: false,
  // antdMobile: {
  //   hd: true,
  // },
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
      exclude: /antd-mobile/,
      viewportWidth: 375, // 视口宽度，对应设计稿的宽度，一般是 375 或 750
      viewportHeight: 1334, // 视口高度，根据 750 设备的宽度来指定，一般指定 1334 也可以不配置
      unitPrecision: 3, // 指定 `px` 转换为视口单位值的小数位数
      viewportUnit: 'vw', // 指定需要转换成的视口单位，建议使用 vw
      selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视口单位的类，可以自定义，可以无限添加，建议定义一至两个通用的类名
      minPixelValue: 1, // 小于或等于 `1px` 不转换为视口单位，你也可以设置为你想要的值
      mediaQuery: true, // 允许在媒体查询中转换 `px`
    }),
  ],
  metas: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
  ],
  headScripts: [
    // 'https://res.wx.qq.com/open/js/jweixin-1.6.0.js',
    // 'https://res2.wx.qq.com/open/js/jweixin-1.6.0.js',
  ],
});
