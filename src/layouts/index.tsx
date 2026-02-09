import { Outlet } from '@umijs/max';
import React from 'react';

const GlobalLayout: React.FC = ()=> {
  return (
    <div className='rertrttetete'>
      <Outlet />
    </div>
  );
}

export default GlobalLayout;