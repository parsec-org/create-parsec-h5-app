import { initWechatSDK } from '@/libs/init';
import { isWx } from '@/utils';
import { Outlet } from '@umijs/max';
import React, { useEffect } from 'react';

const GlobalLayout: React.FC = () => {
  useEffect(() => {
    initWechatSDK();
  }, []);

  if (!isWx) {
    return <div>请在微信环境中访问该页面</div>;
  }
  return (
    <div className="parsec-mobile-layout">
      <Outlet />
    </div>
  );
};

export default GlobalLayout;
