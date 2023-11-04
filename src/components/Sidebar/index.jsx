import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/index.scss';
import './index.scss';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div
      className={`side-bar ${
        isSidebarOpen
          ? 'animate__animated animate__fadeInDownBig'
          : 'animate__animated animate__fadeOutUpBig'
      }`}
    >
      <div className="container">
        {/* <div className="row"> */}
        {/* <div className="col-12"> */}
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                exact="true"
                className={({ isActive }) =>
                  'nav-link ' + (isActive ? 'active' : '')
                }
                style={({ isActive }) => ({
                  color: isActive ? '#ffcc00' : 'inherit',
                })}
                onClick={toggleSidebar}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  'nav-link ' + (isActive ? 'active' : '')
                }
                style={({ isActive }) => ({
                  color: isActive ? '#ffcc00' : 'inherit',
                })}
                onClick={toggleSidebar}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  'nav-link ' + (isActive ? 'active' : '')
                }
                style={({ isActive }) => ({
                  color: isActive ? '#F7C331' : 'inherit',
                })}
                onClick={toggleSidebar}
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  'nav-link ' + (isActive ? 'active' : '')
                }
                style={({ isActive }) => ({
                  color: isActive ? '#ffcc00' : 'inherit',
                })}
                onClick={toggleSidebar}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
