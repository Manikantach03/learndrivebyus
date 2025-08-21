import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import BookingSlotPage from '../BookingSlotPage';
import InstructorDashboard from '../InstructorDashboard';
import StudentDashboard from '../StudentDashboard';
import AddSchoolScreen from '../AddSchool';

const Sidemain = () => {
  const [activePage, setActivePage] = useState('home');
  const accountType = localStorage.getItem("accountType");
  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return accountType === "User" ? (
          <StudentDashboard />
        ) : (
          <InstructorDashboard />
        );
      case 'bookslot':
        return <BookingSlotPage />;
      case 'mybookings':
        return <h1 className="fs-2">Mybookings</h1>;
      case 'nearby':
        return <h1 className="fs-2">📍 Nearby School</h1>;
        case "myschools":
          return <AddSchoolScreen/>
      default:
        return <h1 className="fs-2">Dashboard</h1>;
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
