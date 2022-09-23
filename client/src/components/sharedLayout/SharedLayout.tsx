import React from 'react';
import { Outlet } from 'react-router-dom';
import * as Components from '../index';

const SharedLayout: React.FC = () => {
  return (
    <>
      <Components.Sidebar />
      <Outlet />
    </>
  );
};

export default SharedLayout;
