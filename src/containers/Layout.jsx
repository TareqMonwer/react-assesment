import React, { useState } from 'react';
import clsx from 'clsx';
import Drawer from "components/common/Drawer/Drawer";
import Nav from "components/common/Nav/Nav";
import Footer from 'components/common/Footer/Footer';
import './Layout.scss';

const Layout = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const handleClose = () => {
    setDrawerOpen(!drawerOpen);
  }

  return (
    <div>
      <Nav />
      <Drawer open={drawerOpen} onClose={handleClose} />
      <div className={clsx('main', {
        ['ml-60']: drawerOpen,
        ['ml-0']: !drawerOpen,
        })}>
        <div className="p-10">
            {children}
        </div>
        <Footer />
      </div>
      
    </div>
  );
}

export default Layout;