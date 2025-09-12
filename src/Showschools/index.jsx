import React, { useState } from 'react';

// Add Bootstrap CSS directly via CDN
const bootstrapLink = document.getElementById('bootstrap-css') || document.createElement('link');
bootstrapLink.id = 'bootstrap-css';
bootstrapLink.rel = 'stylesheet';
bootstrapLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css';
if (!document.getElementById('bootstrap-css')) {
  document.head.appendChild(bootstrapLink);
}

const SchoolDetailsCard = () => {
  const [schools, setSchools] = useState([
    {
      id: 1,
      name: "Greenwood International School",
      photos: [
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=250&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
        "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=250&fit=crop"
      ],
      ownerPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      ownerName: "Dr. Sarah Johnson",
      ownerTitle: "Principal & Founder",
      address: "123 Education Street, Knowledge City",
      phone: "+1 (555) 123-4567",
      email: "info@greenwood.edu",
      established: "1995",
      type: "International",
      grades: "K-12",
      students: "850",
      faculty: "65",
      accreditation: "IB, Cambridge",
      facilities: ["Library", "Science Labs", "Sports Complex", "Art Studio", "Music Room"],
      programs: ["IB Diploma", "Cambridge IGCSE", "Advanced Placement"],
      rating: 4.8,
      description: "A premier international school committed to academic excellence and holistic development of students."
    },
    {
      id: 2,
      name: "Sunshine Elementary School",
      photos: [
        "https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&h=250&fit=crop",
        "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=250&fit=crop"
      ],
      ownerPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      ownerName: "Mrs. Emily Davis",
      ownerTitle: "Head Teacher",
      address: "456 Learning Lane, Education District",
      phone: "+1 (555) 987-6543",
      email: "contact@sunshine.edu",
      established: "2003",
      type: "Elementary",
      grades: "K-5",
      students: "320",
      faculty: "28",
      accreditation: "State Certified",
      facilities: ["Playground", "Computer Lab", "Library", "Art Room"],
      programs: ["STEM Program", "Arts Integration", "Reading Recovery"],
      rating: 4.6,
      description: "A nurturing elementary school focused on building strong foundations for lifelong learning."
    }
  ]);

  const [selectedSchool, setSelectedSchool] = useState(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState({});
  const [showPhotoOptions, setShowPhotoOptions] = useState({});

  const nextPhoto = (schoolId) => {
    const school = schools.find(s => s.id === schoolId);
    setCurrentPhotoIndex(prev => ({
      ...prev,
      [schoolId]: ((prev[schoolId] || 0) + 1) % school.photos.length
    }));
  };

  const prevPhoto = (schoolId) => {
    const school = schools.find(s => s.id === schoolId);
    setCurrentPhotoIndex(prev => ({
      ...prev,
      [schoolId]: ((prev[schoolId] || 0) - 1 + school.photos.length) % school.photos.length
    }));
  };

  const handlePhotoAction = (action, schoolId, photoIndex) => {
    if (action === 'add') {
      // In real app, this would open file picker
      alert('Add photo functionality - would open file picker');
    } else if (action === 'delete') {
      setSchools(prevSchools => 
        prevSchools.map(school => 
          school.id === schoolId 
            ? { ...school, photos: school.photos.filter((_, index) => index !== photoIndex) }
            : school
        )
      );
    }
    setShowPhotoOptions(prev => ({ ...prev, [schoolId]: false }));
  };

  const SchoolCard = ({ school, isDetailed = false }) => {
    const currentIndex = currentPhotoIndex[school.id] || 0;
    const showOptions = showPhotoOptions[school.id] || false;

    return (
      <div className={`card mb-4 shadow ${isDetailed ? 'border-primary' : ''}`}>
        <div className="card-body p-0">
          {/* Photo Section */}
          <div className="position-relative" style={{ height: '250px', overflow: 'hidden' }}>
            {school.photos.length > 0 && (
              <>
                <img 
                  src={school.photos[currentIndex]} 
                  alt={`${school.name} - Photo ${currentIndex + 1}`}
                  className="w-100 h-100" 
                  style={{ objectFit: 'cover' }}
                />
                
                {/* Photo Navigation */}
                {school.photos.length > 1 && (
                  <>
                    <button 
                      className="btn btn-light btn-sm position-absolute top-50 start-0 translate-middle-y ms-2"
                      onClick={() => prevPhoto(school.id)}
                      style={{ opacity: 0.8 }}
                    >
                      &#8249;
                    </button>
                    <button 
                      className="btn btn-light btn-sm position-absolute top-50 end-0 translate-middle-y me-2"
                      onClick={() => nextPhoto(school.id)}
                      style={{ opacity: 0.8 }}
                    >
                      &#8250;
                    </button>
                  </>
                )}

                {/* Photo Options Dots */}
                <div 
                  className="position-absolute top-0 end-0 m-3"
                  onMouseEnter={() => setShowPhotoOptions(prev => ({ ...prev, [school.id]: true }))}
                  onMouseLeave={() => setShowPhotoOptions(prev => ({ ...prev, [school.id]: false }))}
                >
                  <div className="bg-white rounded-circle d-flex align-items-center justify-content-center" 
                       style={{ width: '32px', height: '32px', cursor: 'pointer' }}>
                    <span style={{ fontSize: '18px', fontWeight: 'bold' }}>⋯</span>
                  </div>
                  
                  {showOptions && (
                    <div className="position-absolute bg-white rounded shadow mt-1" style={{ right: 0, zIndex: 1000, minWidth: '120px' }}>
                      <button 
                        className="btn btn-sm btn-light w-100 text-start border-0 rounded-0"
                        onClick={() => handlePhotoAction('add', school.id)}
                      >
                        📷 Add Photo
                      </button>
                      <button 
                        className="btn btn-sm btn-light w-100 text-start border-0 rounded-0"
                        onClick={() => handlePhotoAction('delete', school.id, currentIndex)}
                        disabled={school.photos.length <= 1}
                      >
                        🗑️ Delete Photo
                      </button>
                    </div>
                  )}
                </div>

                {/* Photo Indicators */}
                {school.photos.length > 1 && (
                  <div className="position-absolute bottom-0 start-50 translate-middle-x mb-2">
                    {school.photos.map((_, index) => (
                      <span 
                        key={index}
                        className={`badge mx-1 ${index === currentIndex ? 'bg-primary' : 'bg-secondary'}`}
                        style={{ cursor: 'pointer', width: '8px', height: '8px' }}
                        onClick={() => setCurrentPhotoIndex(prev => ({ ...prev, [school.id]: index }))}
                      ></span>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>

          <div className="p-4">
            {/* Owner Info Section */}
            <div className="d-flex align-items-center mb-3">
              <img 
                src={school.ownerPhoto} 
                alt={school.ownerName}
                className="rounded-circle me-3"
                style={{ width: '60px', height: '60px', objectFit: 'cover' }}
              />
              <div>
                <h5 className="mb-0">{school.name}</h5>
                <div className="text-muted">
                  <strong>{school.ownerName}</strong>
                  <div className="small">{school.ownerTitle}</div>
                </div>
              </div>
              <div className="ms-auto">
                <div className="d-flex align-items-center">
                  <span className="text-warning me-1">★</span>
                  <span className="fw-bold">{school.rating}</span>
                </div>
              </div>
            </div>

            {/* Basic Info */}
            <div className="row mb-3">
              <div className="col-md-6">
                <small className="text-muted d-block">Address</small>
                <div>{school.address}</div>
              </div>
              <div className="col-md-3">
                <small className="text-muted d-block">Established</small>
                <div>{school.established}</div>
              </div>
              <div className="col-md-3">
                <small className="text-muted d-block">Type</small>
                <div>{school.type}</div>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-4">
                <small className="text-muted d-block">Phone</small>
                <div>{school.phone}</div>
              </div>
              <div className="col-md-4">
                <small className="text-muted d-block">Students</small>
                <div>{school.students}</div>
              </div>
              <div className="col-md-4">
                <small className="text-muted d-block">Grades</small>
                <div>{school.grades}</div>
              </div>
            </div>

            {/* Detailed View */}
            {isDetailed && (
              <>
                <hr />
                <div className="row mb-3">
                  <div className="col-md-6">
                    <small className="text-muted d-block">Email</small>
                    <div>{school.email}</div>
                  </div>
                  <div className="col-md-3">
                    <small className="text-muted d-block">Faculty</small>
                    <div>{school.faculty}</div>
                  </div>
                  <div className="col-md-3">
                    <small className="text-muted d-block">Accreditation</small>
                    <div>{school.accreditation}</div>
                  </div>
                </div>

                <div className="mb-3">
                  <small className="text-muted d-block">Description</small>
                  <p>{school.description}</p>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <small className="text-muted d-block">Facilities</small>
                    <div>
                      {school.facilities.map((facility, index) => (
                        <span key={index} className="badge bg-light text-dark me-1 mb-1">
                          {facility}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <small className="text-muted d-block">Programs</small>
                    <div>
                      {school.programs.map((program, index) => (
                        <span key={index} className="badge bg-primary me-1 mb-1">
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Action Buttons */}
            <div className="d-flex justify-content-between mt-3">
              {!isDetailed ? (
                <>
                  <button 
                    className="btn btn-outline-primary"
                    onClick={() => setSelectedSchool(school)}
                  >
                    View More Details
                  </button>
                  <div>
                    <button className="btn btn-outline-secondary me-2">Edit</button>
                  </div>
                </>
              ) : (
                <>
                  <button 
                    className="btn btn-secondary"
                    onClick={() => setSelectedSchool(null)}
                  >
                    ← Back to List
                  </button>
                  <div>
                    <button className="btn btn-outline-secondary me-2">Edit School</button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <h2 className="mb-4">
            {selectedSchool ? 'School Details' : 'Schools Directory'}
            <button className="btn btn-success ms-3">+ Add New School</button>
          </h2>
          
          {selectedSchool ? (
            <SchoolCard school={selectedSchool} isDetailed={true} />
          ) : (
            <div className="row">
              {schools.map(school => (
                <div key={school.id} className="col-lg-6">
                  <SchoolCard school={school} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchoolDetailsCard;