import React from 'react';
import './NavItem.scss';

const NavItem = ({ children, component = 'a', to = '#', hrefTarget = '' }) => {
  const navItemClasses = 'navItem mr-8'

  switch (component) {
    case 'a':
      return (
        <a className={navItemClasses} href={to} target={hrefTarget} rel="noopener noreferrer">
          {children}
        </a>
      );
    case 'span':
      return (
        <span className={navItemClasses} >{children}</span>
      )
  }
}

export default NavItem;