import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import BookingSlotPage from '../BookingSlotPage';
import Homedas from "../Homedas"
const Sidemain = () => {
  const [activePage, setActivePage] = useState('home');

  const renderContent = () => {
    switch (activePage) {
      case 'home': return <Homedas/>;
      case 'bookslot': return <BookingSlotPage/>;
      case 'mybookings': return <h1 className="fs-2">📋 My Bookings</h1>;
      case 'nearby': return <h1 className="fs-2">📍 Nearby School</h1>;
      case 'payments': return <h1 className="fs-2">💳 Payments</h1>;
      case 'feedback': return <h1 className="fs-2">💬 Feedback</h1>;
      case 'notification': return <h1 className="fs-2">🔔 Notification</h1>;
      case 'settings': return <h1 className="fs-2">⚙️ Settings</h1>;
      default: return <h1 className="fs-2">Dashboard</h1>;
    }
  };

  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <Sidebar active={activePage} setActive={setActivePage} />

      {/* Main content */}
      <div className="flex-grow-1 overflow-auto p-4 bg-light">
        {renderContent()}
      </div>
    </div>
  );
};

export default Sidemain;
