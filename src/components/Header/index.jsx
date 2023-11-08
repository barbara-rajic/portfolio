import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';
import Menu from '../Menu';
import { CloseIcon, MenuIcon } from '../Icons';

const Header = ({ isSidebarOpen, toggleSidebar }) => {
  const headerRef = useRef(null);

  return (
    <header
      className="header"
      style={{
        paddingTop: isSidebarOpen ? `${headerRef.current.offsetHeight}px` : '0',
      }}
    >
      <div
        ref={headerRef}
        className={`header__content ${isSidebarOpen ? 'fixed' : ''}`}
      >
        <NavLink to="#" className="menu-link" onClick={toggleSidebar}>
          {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
        </NavLink>
      </div>
      <Menu isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </header>
  );
};

export default Header;
