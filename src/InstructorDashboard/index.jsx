import { useState } from "react";
import {
  Car,
  Calendar,
  Users,
  Clock,
  Star,
  TrendingUp,
  Bell,
  Settings,
  User,
  DollarSign,
  CheckCircle,
  AlertCircle,
  Lock,
  MessageSquare,
  CreditCard,
} from "lucide-react";
import ChangePassword from "../ChangePassword";
import InstructorProfile from "../InstructorProfile";
const InstructorDashboard = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);

  const instructorStats = [
    {
      icon: Users,
      title: "Active Students",
      value: "28",
      change: "+5 this month",
      color: "success",
    },
    {
      icon: Calendar,
      title: "Lessons Today",
      value: "8",
      change: "2 remaining",
      color: "info",
    },
    {
      icon: DollarSign,
      title: "Monthly Revenue",
      value: "$4,250",
      change: "+12% vs last month",
      color: "success",
    },
    {
      icon: Star,
      title: "Average Rating",
      value: "4.8",
      change: "Based on 156 reviews",
      color: "warning",
    },
  ];

  const upcomingLessons = [
    {
      student: "Sarah Johnson",
      time: "9:00 AM",
      type: "Highway Driving",
      status: "confirmed",
    },
    {
      student: "Mike Chen",
      time: "11:30 AM",
      type: "Parallel Parking",
      status: "pending",
    },
    {
      student: "Emma Davis",
      time: "2:00 PM",
      type: "Road Test Prep",
      status: "confirmed",
    },
    {
      student: "Alex Rodriguez",
      time: "4:00 PM",
      type: "City Driving",
      status: "confirmed",
    },
  ];
  const [showProfile, setShowProfile] = useState(false);
  const StatCard = ({ icon: Icon, title, value, change, color }) => (
    <div className="col-md-6 col-lg-3 mb-4">
      <div
        className="card h-100 shadow-sm border-0"
        style={{
          borderTop: `4px solid ${
            color === "primary"
              ? "#7450a8"
              : color === "success"
              ? "#28a745"
              : color === "info"
              ? "#17a2b8"
              : "#ffc107"
          }`,
        }}
      >
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div
              className={`me-3 p-3 rounded-circle bg-${
                color === "primary" ? "light" : color
              }-light`}
            >
              <Icon
                size={24}
                className={`text-${color === "primary" ? "primary" : color}`}
                style={color === "primary" ? { color: "#7450a8" } : {}}
              />
            </div>
            <div className="flex-grow-1">
              <h6 className="card-subtitle mb-1 text-muted">{title}</h6>
              <h3 className="card-title mb-1 fw-bold">{value}</h3>
              <small
                className={`text-${color === "primary" ? "primary" : color}`}
              >
                {change}
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="min-vh-100" style={{ backgroundColor: "#f8f9fa" }}>
        {/* Header */}
        <nav
          className="navbar navbar-expand-lg shadow-sm"
          style={{ backgroundColor: "#7450a8" }}
        >
          <div className="container-fluid">
            <div className="d-flex align-items-center">
              <Car className="text-white me-2" size={28} />
              <span className="navbar-brand text-white mb-0 h1 fw-bold">
                DriveAcademy
              </span>
            </div>

            <div className="d-flex align-items-center">
              {/* Notifications */}
              <div className="position-relative me-3">
                <Bell className="text-white" size={20} />
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: "0.6rem" }}
                >
                  3
                </span>
              </div>
              {/* Profile Dropdown */}
              <div className="dropdown position-relative">
                <button
                  className="btn btn-link text-white p-0 d-flex align-items-center"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <User className="me-2" size={22} />
                </button>

                {dropdownOpen && (
                  <div
                    className="dropdown-menu dropdown-menu-end show shadow-sm"
                    style={{
                      position: "absolute",
                      top: "100%",
                      right: 0,
                      marginTop: "8px",
                      minWidth: "220px",
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      padding: "0.5rem 0",
                      zIndex: 999,
                      backgroundColor: "#fff",
                    }}
                  >
                    {/* User Info */}
                    <div className="px-3 py-2 border-bottom">
                      <div className="fw-bold">Sarah Wilson</div>
                      <small className="text-muted">Instructor</small>
                    </div>
                    {/* Menu Items with Hover */}
                    <button
                      className="dropdown-item d-flex align-items-center custom-hover"
                      onClick={() => {
                        setIsChangePasswordOpen(true);
                        setDropdownOpen(false);
                      }}
                    >
                      <Lock size={16} className="me-2 text-secondary" />
                      Change Password
                    </button>
                    
                      <button
                      className="dropdown-item d-flex align-items-center custom-hover"
  onClick={() => setShowProfile(true)}
                    >
                      <User
                        size={16}
                        className="me-2 text-secondary"
                      />
                      Profile
                    </button>

                    <button
                      className="dropdown-item d-flex align-items-center custom-hover"
                      onClick={() => console.log("Feedback")}
                    >
                      <MessageSquare
                        size={16}
                        className="me-2 text-secondary"
                      />
                      Feedback
                    </button>
                    <button
                      className="dropdown-item d-flex align-items-center custom-hover"
                      onClick={() => console.log("Payments")}
                    >
                      <CreditCard size={16} className="me-2 text-secondary" />
                      Payments
                    </button>
                    <button
                      className="dropdown-item d-flex align-items-center custom-hover"
                      onClick={() => console.log("Settings")}
                    >
                      <Settings size={16} className="me-2 text-secondary" />
                      Settings
                    </button>
                  </div>
                )}
              </div>
              <style>
                {`
                  .custom-hover:hover {
                    background-color: #7450a8 !important;
                    color: white !important;
                  }
                  .custom-hover:hover svg {
                    color: white !important;
                  }
                `}
              </style>
            </div>
          </div>
        </nav>

        <div className="container-fluid py-4">
          {/* Welcome Section */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h2 className="mb-1 fw-bold" style={{ color: "#7450a8" }}>
                    Good morning, Sarah!
                  </h2>
                  <p className="text-muted mb-0">
                    You have 8 lessons scheduled for today. Have a great day
                    teaching!
                  </p>
                </div>
                <div>
                  <button
                    className="btn btn-primary me-2"
                    style={{
                      backgroundColor: "#7450a8",
                      borderColor: "#7450a8",
                    }}
                  >
                    Add Student
                  </button>
                  <button className="btn btn-outline-secondary">
                    <Settings size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="row mb-4">
            {instructorStats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>

          <div className="row">
            {/* Main Content */}
            <div className="col-lg-8 mb-4">
              {/* Instructor View - Today's Schedule */}
              <div className="card shadow-sm border-0">
                <div className="card-header bg-white border-0 pb-0">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0 fw-bold">Today's Schedule</h5>
                    <button className="btn btn-sm btn-outline-primary">
                      Manage Schedule
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  {upcomingLessons.map((lesson, index) => (
                    <div
                      key={index}
                      className="d-flex align-items-center py-3 border-bottom"
                    >
                      <div className="me-3">
                        <div className="p-2 rounded-circle bg-light">
                          <Clock size={20} style={{ color: "#7450a8" }} />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-1 fw-semibold">{lesson.student}</h6>
                        <small className="text-muted">{lesson.type}</small>
                      </div>
                      <div className="text-end">
                        <div className="fw-semibold mb-1">{lesson.time}</div>
                        <span
                          className={`badge ${
                            lesson.status === "confirmed"
                              ? "bg-success"
                              : "bg-warning"
                          }`}
                        >
                          {lesson.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              {/* Quick Actions */}
              <div className="card shadow-sm border-0 mb-4">
                <div className="card-header bg-white border-0">
                  <h5 className="mb-0 fw-bold">Quick Actions</h5>
                </div>
                <div className="card-body">
                  <div className="d-grid gap-2">
                    <button className="btn btn-outline-primary d-flex align-items-center justify-content-start">
                      <Users className="me-2" size={16} />
                      Student Progress
                    </button>
                    <button className="btn btn-outline-primary d-flex align-items-center justify-content-start">
                      <Calendar className="me-2" size={16} />
                      Schedule Management
                    </button>
                    <button className="btn btn-outline-primary d-flex align-items-center justify-content-start">
                      <TrendingUp className="me-2" size={16} />
                      Performance Reports
                    </button>
                    <button className="btn btn-outline-primary d-flex align-items-center justify-content-start">
                      <Car className="me-2" size={16} />
                      Vehicle Status
                    </button>
                  </div>
                </div>
              </div>

              {/* Recent Activity / Notifications */}
              <div className="card shadow-sm border-0">
                <div className="card-header bg-white border-0">
                  <h5 className="mb-0 fw-bold">Recent Activity</h5>
                </div>
                <div className="card-body">
                  <div className="timeline">
                    <div className="d-flex align-items-start mb-3">
                      <div className="me-3">
                        <div className="p-1 rounded-circle bg-success-light">
                          <CheckCircle size={16} className="text-success" />
                        </div>
                      </div>
                      <div>
                        <small className="text-muted">2 hours ago</small>
                        <p className="mb-0 small">
                          Mike Chen completed parallel parking
                        </p>
                      </div>
                    </div>
                    <div className="d-flex align-items-start mb-3">
                      <div className="me-3">
                        <div className="p-1 rounded-circle bg-info-light">
                          <Calendar size={16} className="text-info" />
                        </div>
                      </div>
                      <div>
                        <small className="text-muted">1 day ago</small>
                        <p className="mb-0 small">
                          New student Emma Davis enrolled
                        </p>
                      </div>
                    </div>
                    <div className="d-flex align-items-start">
                      <div className="me-3">
                        <div className="p-1 rounded-circle bg-warning-light">
                          <AlertCircle size={16} className="text-warning" />
                        </div>
                      </div>
                      <div>
                        <small className="text-muted">3 days ago</small>
                        <p className="mb-0 small">
                          Vehicle maintenance scheduled
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .bg-success-light {
            background-color: rgba(40, 167, 69, 0.1) !important;
          }
          .bg-info-light {
            background-color: rgba(23, 162, 184, 0.1) !important;
          }
          .bg-warning-light {
            background-color: rgba(255, 193, 7, 0.1) !important;
          }
          .bg-light {
            background-color: rgba(116, 80, 168, 0.1) !important;
          }
          .btn-outline-primary {
            border-color: #7450a8;
            color: #7450a8;
          }
          .btn-outline-primary:hover {
            background-color: #7450a8;
            border-color: #7450a8;
          }
          .text-primary {
            color: #7450a8 !important;
          }
          .card {
            transition: transform 0.2s ease-in-out;
          }
          .card:hover {
            transform: translateY(-2px);
          }
          .timeline {
            position: relative;
          }
        `}</style>
      </div>
      <ChangePassword
        isOpen={isChangePasswordOpen}
        onClose={() => setIsChangePasswordOpen(false)}
      />
<InstructorProfile
  isOpen={showProfile}
  onClose={() => setShowProfile(false)}
  onSave={(data) => console.log("Saved:", data)}
/>
    </>
  );
};

export default InstructorDashboard;
