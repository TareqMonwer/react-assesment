import React, { useState } from 'react';
import Drawer from 'components/common/Drawer/Drawer';
import Nav from 'components/common/Nav/Nav';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(true);
  
  const handleClose = () => {
    setDrawerOpen(!drawerOpen);
  }

  return (
    <>
      <Nav />
      <Drawer open={drawerOpen} onClose={handleClose} />
    </>
  );
}

export default App;
