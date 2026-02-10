import type { RequestConfig, RuntimeConfig } from '@umijs/max';
import { ConfigProvider, unstableSetRender } from 'antd-mobile';
import 'antd-mobile/es/global';
import zhCN from 'antd-mobile/es/locales/zh-CN';
import React from 'react';
import { createRoot } from 'react-dom/client';
//
// import type { RequestConfig } from 'umi';
//

export const request: RequestConfig = {
  timeout: 10000,
  errorConfig: {
    errorHandler(error: any) {
      console.error('请求错误:', error);
    },
  },
  requestInterceptors: [
    (url: string, options: any) => {
      // 添加请求头
      const headers = {
        ...options.headers,
        'X-Requested-With': 'XMLHttpRequest',
      };

      return {
        url,
        options: { ...options, headers },
      };
    },
  ],
  responseInterceptors: [
    (response: any) => {
      // 处理响应
      return response;
    },
  ],
};

// // 在初始加载和路由切换时做一些事情。
// export function onRouteChange({ location, routes, action }: any) {
//   console.log('location', location);
//   console.log('routes', routes);
//   console.log('action', action);
//   // bacon(location.pathname);
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
unstableSetRender((node, container) => {
  // @ts-ignore
  container._reactRoot ||= createRoot(container);
  // @ts-ignore
  const root = container._reactRoot;
  root.render(node);
  return async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, 0);
    });
    root.unmount();
  };
});
