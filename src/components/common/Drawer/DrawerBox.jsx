import React from "react";
import { Link } from "react-router-dom";
import clsx from 'clsx'
import { RiReactjsLine } from '@react-icons/all-files/ri/RiReactjsLine';

const DrawerBox = ({ isDropdown, children, selected, label, onClick }) => {
  const drawerBoxClasses = 'px-4 py-5 font-bold flex items-center';
  const drawerBoxChildClasses = 'w-full pl-8 py-3 font-bold flex items-center'
  
  return (
    <div
      onClick={() => onClick()}
      className="relative cursor-pointer  text-white border-b border-indigo-900">
      <div className={clsx(drawerBoxClasses, {
        // eslint-disable-next-line
        ['bg-indigo-900']: selected,
        // eslint-disable-next-line 
        ['bg-indigo-700']: !selected,
      })}>
        <RiReactjsLine />
        <span className="ml-2">{label}</span>
      </div>
      {isDropdown && selected && children? (
        children.map((child, index) => (
          <div className={drawerBoxChildClasses} key={index} onClick={e => e.stopPropagation()}>
            <Link to={child.path}>
              - &nbsp; {child.text}
            </Link>
          </div>
        ))
      ) : null}
    </div>
  );
};

export default DrawerBox;
