import React, { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';


const SidebarBootstrap = ({ active, setActive }) => {
  const [collapsed, setCollapsed] = useState(false);
 const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <div className={`d-flex flex-column bg-white border-end vh-100 position-sticky top-0 ${collapsed ? 'sidebar-collapsed' : 'sidebar-expanded'}`} style={{ width: collapsed ? '60px' : '250px', transition: 'width 0.3s ease' }}>
      <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
        {!collapsed && <h5 className="mb-0">Dashboard</h5>}
        <button onClick={toggleSidebar} className="btn btn-sm btn-light">
          <i className={`bi ${collapsed ? 'bi-chevron-right' : 'bi-chevron-left'}`}></i>
        </button>
      </div>
      {/* Nav Links */}
      <ul className="nav flex-column row gx-3 gy-3">
        {[
          { name: 'Home', icon: 'bi-house', path: 'home' },
          { name: 'Book Slot', icon: 'bi-calendar-check', path: 'bookslot' },
          { name: 'My Bookings', icon: 'bi-journal-check', path: 'mybookings' },
          { name: 'Nearby School', icon: 'bi-geo-alt', path: 'nearby' },
        ].map(item => (
          <li className="nav-item" key={item.path}>
            <a
              href="#!"
              onClick={() => setActive(item.path)}
           className={`nav-link sidebar-link d-flex align-items-center ${active === item.path ? 'active bg-primary-custom text-white' : 'text-dark'}`}
            >
              <i className={`bi ${item.icon} me-2`}></i>
              {!collapsed && item.name}
            </a>
          </li>
        ))}
      </ul>
      {/* Logout at Bottom */}
      <div className="mt-auto p-3">
        <button className="btn btn-outline-danger w-100 d-flex align-items-center" 
          onClick={handleLogout}>
          <i className="bi bi-box-arrow-right me-2"></i>
          {!collapsed && 'Logout'}
        </button>
      </div>
    </div>
  );
};

export default SidebarBootstrap;
