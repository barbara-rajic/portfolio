import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';
import Sidebar from '../Sidebar';
import { CloseIcon, MenuIcon } from '../Icons';

const Header = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <header className="header">
      <div className="header-content">
        <NavLink to="#" className="menu-link" onClick={toggleSidebar}>
          {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
        </NavLink>
      </div>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </header>
  );
};

export default Header;
