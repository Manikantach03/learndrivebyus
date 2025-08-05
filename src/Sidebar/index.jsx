import React, { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';


const SidebarBootstrap = ({ active, setActive }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
 const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // This will clear token, user and update context
    navigate('/login'); // Redirect to login page
  };
  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <div className={`d-flex flex-column bg-white border-end vh-100 position-sticky top-0 ${collapsed ? 'sidebar-collapsed' : 'sidebar-expanded'}`} style={{ width: collapsed ? '60px' : '250px', transition: 'width 0.3s ease' }}>

      {/* Header with toggle */}
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
              className={`nav-link d-flex align-items-center ${active === item.path ? 'active bg-primary-custom text-white' : 'text-dark'}`}
            >
              <i className={`bi ${item.icon} me-2`}></i>
              {!collapsed && item.name}
            </a>
          </li>
        ))}

        {/* Profile Dropdown */}
        <li className="nav-item">
          <a href="#!" className="nav-link d-flex align-items-center text-dark" onClick={() => setProfileOpen(!profileOpen)}>
            <i className="bi bi-person me-2"></i>
            {!collapsed && 'Profile'}
            {!collapsed && (
              <i className={`bi ms-auto ${profileOpen ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
            )}
          </a>
        </li>

        {profileOpen && !collapsed && (
          <ul className="nav flex-column ms-4">
            {[
              { name: 'Payments', icon: 'bi-credit-card', path: 'payments' },
              { name: 'Feedback', icon: 'bi-chat-dots', path: 'feedback' },
              { name: 'Notification', icon: 'bi-bell', path: 'notification' },
              { name: 'Settings', icon: 'bi-gear', path: 'settings' },
            ].map(sub => (
              <li className="nav-item" key={sub.path}>
                <a
                  href="#!"
                  onClick={() => setActive(sub.path)}
                  className={`nav-link d-flex align-items-center ${active === sub.path ? 'active bg-success text-white' : 'text-dark'}`}
                >
                  <i className={`bi ${sub.icon} me-2`}></i>
                  {sub.name}
                </a>
              </li>
            ))}
          </ul>
        )}
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
