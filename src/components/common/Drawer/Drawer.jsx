import React, { useState } from 'react';
import clsx from 'clsx';
import { sidebarItems } from 'utils/sidebarData';
import { GiHamburgerMenu } from '@react-icons/all-files/gi/GiHamburgerMenu';
import { GrClose } from '@react-icons/all-files/gr/GrClose';
import DrawerBox from './DrawerBox';

const Drawer = ({ open, onClose }) => {
  const [selectedSidebar, setSelectedSidebar] = useState({id: 1, selected: true})
  const drawerContainerClass = 'fixed h-screen w-60 bg-indigo-500 overflow-y-scroll overflow-x-auto';

  const handleOnClose = () => {
    onClose();
  }

  const handleSelectSidebar = ({ id, isDropdown }) => {
    if (id === selectedSidebar.id && selectedSidebar.selected) {
      // sidebar already selected.
      setSelectedSidebar({ id: id, selected: false });
    } else {
      setSelectedSidebar({ id: id, selected: true });
    }
  }

  return (
    <>
    <div>
      <div
          className={
          clsx('fixed top-0 z-10 cursor-pointer p-3 bg-white border border-1', {
            // eslint-disable-next-line 
            ['ml-60']: open,
            // eslint-disable-next-line 
            ['ml-0']: !open
          })
        }
        onClick={handleOnClose}
      >
        {open ? <GrClose /> : <GiHamburgerMenu />}
      </div>
      {open && <div
        className={drawerContainerClass}>
        {
          sidebarItems.map(sidebarItem => (
            <DrawerBox key={`sb${sidebarItem.id}`}
              selected={
                selectedSidebar.id === sidebarItem.id ? selectedSidebar.selected : false
              }
              isDropdown={sidebarItem?.isDropdown}
              label={sidebarItem.text}
              children={sidebarItem?.children}
              onClick={() => handleSelectSidebar(sidebarItem)}
            />
          ))
        }
      </div>}
    </div>
    </>
  );
}

export default Drawer;