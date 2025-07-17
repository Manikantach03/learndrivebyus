import React from 'react';

function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user')) || {};

  return (
    <div className="container py-4">
      <h2 className="mb-4">Welcome, {user.name || 'Learner'}!</h2>

      {/* Summary Cards */}
      <div className="row g-4 mb-4">
        <div className="col-md-3">
          <div className="card border-success shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Total Bookings</h5>
              <p className="card-text fs-4">12</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card border-primary shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Upcoming Classes</h5>
              <p className="card-text fs-4">3</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card border-warning shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Completed Lessons</h5>
              <p className="card-text fs-4">9</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card border-danger shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Pending Tests</h5>
              <p className="card-text fs-4">1</p>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Sessions */}
      <div className="card mb-4 shadow-sm">
        <div className="card-header bg-primary text-white">Upcoming Driving Classes</div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">🚗 20 July, 10:00 AM - City Roads with Instructor Raj</li>
            <li className="list-group-item">🛣️ 21 July, 1:00 PM - Highway Basics with Instructor Sara</li>
            <li className="list-group-item">🅿️ 23 July, 9:00 AM - Parking Practice with Instructor Mike</li>
          </ul>
        </div>
      </div>

      {/* Instructor Contact */}
      <div className="card shadow-sm">
        <div className="card-header bg-success text-white">Your Assigned Instructor</div>
        <div className="card-body">
          <h5 className="card-title">Raj Sharma</h5>
          <p className="card-text">
            📞 Phone: +91 98765 43210 <br />
            ✉️ Email: raj.instructor@example.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
