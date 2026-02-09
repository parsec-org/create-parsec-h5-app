import 'antd-mobile/es/global';
import { ConfigProvider } from 'antd-mobile';
import React from 'react';
import type { RuntimeConfig } from '@umijs/max';
import zhCN from 'antd-mobile/es/locales/zh-CN';
//
// import type { RequestConfig } from 'umi';
//
// export const request: RequestConfig = {
//   timeout: 1000,
//   // other axios options you want
//   errorConfig: {
//     errorHandler(){
//     },
//     errorThrower(){
//     }
//   },
//   requestInterceptors: [],
//   responseInterceptors: []
// };
//
// // 在初始加载和路由切换时做一些事情。
// export function onRouteChange({ location, routes, action }: any) {
//   console.log('location', location);
//   console.log('routes', routes);
//   console.log('action', action);
//   // bacon(location.pathname);
// }
//
// export function patchRoutes({ routes, routeComponents }: any) {
//   console.log('patchRoutes', routes, routeComponents);
// }

export const rootContainer: RuntimeConfig['rootContainer'] = (container) => {
  return React.createElement(
    ConfigProvider,
    {
      locale: zhCN,
    },
    container,
  );
};

/**
 * https://ant-design-mobile.antgroup.com/zh/guide/v5-for-19
 */
// unstableSetRender((node, container) => {
//   // @ts-ignore
//   container._reactRoot ||= createRoot(container);
//   // @ts-ignore
//   const root = container._reactRoot;
//   root.render(node);
//   return async () => {
//     await new Promise((resolve) => setTimeout(resolve, 0));
//     root.unmount();
//   };
// });