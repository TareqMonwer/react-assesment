import React, { useState } from 'react';
import clsx from 'clsx';
import Drawer from "components/common/Drawer/Drawer";
import Nav from "components/common/Nav/Nav";
import './Layout.scss';
import Container from './Container';

const Layout = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const handleClose = () => {
    setDrawerOpen(!drawerOpen);
  }

  return (
    <div>
      <Nav />
      <Drawer open={drawerOpen} onClose={handleClose} />
      <div className={clsx('main min-h-screen', {
        ['ml-60']: drawerOpen,
        ['ml-0']: !drawerOpen,
        })}>
        <div className="p-10">
            {children}
        </div>
        </div>
    </div>
  );
}

export default Layout;