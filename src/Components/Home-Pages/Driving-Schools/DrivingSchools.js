// import React from 'react';
// import './DrivingSchools.css';
// import { schools } from './Driving-Schools-Data';



// function DrivingSchools() {
// console.log("SCHOOLS DATA ", schools)
//   return (
//     <div className='container-fluid'>
//     <div className="container">
//       <h3 className="fw-bold mb-4 feature-driving-school-title">Featured Driving Schools</h3>

//       <div className="d-flex flex-wrap gap-3 mb-4">
//         {['City', 'Car Type', 'Location', 'Price'].map((label, index) => (
//           <div key={index} className="dropdown">
//             <button className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown">
//               {label}
//             </button>
//             <ul className="dropdown-menu">
//               <li><a className="dropdown-item" href="#">Option 1</a></li>
//               <li><a className="dropdown-item" href="#">Option 2</a></li>
//             </ul>
//           </div>
//         ))}
//       </div>

//       <div className="row g-4">
//         {schools.map((school, idx) => (
//           <div className="col-12 col-sm-6 col-lg-4" key={idx}>
//             <div className="card school-card h-100">
//               <div className="position-relative">
//                 <img src={school.image} className="card-img-top" loading="lazy" alt={school.name} />
//                 <div className="rating-badge">
//                   {school.rating} <i className="fas fa-star ms-1"></i>
//                 </div>
//               </div>
//               <div className="driving-school-card-body">
//                 <h5 className="driving-school-card-title">{school.name}</h5>
//                 <p className="driving-school-card-text">{school.experience}</p>
//                 <p className="driving-school-card-text">{school.instructors}</p>
//                 <p className="driving-school-card-text text-muted">
//                   <i className="fas fa-map-marker-alt me-1"></i>{school.location}
//                 </p>
//                 <a href="#" className="btn schools-View-btn w-100">View Details</a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// }

// export default DrivingSchools;

import React from 'react';
import './DrivingSchools.css';
import { schools } from './Driving-Schools-Data';
// import { Link } from 'react-router-dom'; // Uncomment this if you're using React Router

function DrivingSchools() {
  console.log("SCHOOLS DATA ", schools);
  return (
    <div className='container-fluid'>
      <div className="container">
        <h3 className="fw-bold mb-4 feature-driving-school-title">Featured Driving Schools</h3>

        <div className="d-flex flex-wrap gap-3 mb-4">
          {['City', 'Car Type', 'Location', 'Price'].map((label, index) => (
            <div key={index} className="dropdown">
              <button className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown">
                {label}
              </button>
              <ul className="dropdown-menu">
                <li><button className="dropdown-item">Option 1</button></li>
                <li><button className="dropdown-item">Option 2</button></li>
              </ul>
            </div>
          ))}
        </div>

        <div className="row g-4">
          {schools.map((school, idx) => (
            <div className="col-12 col-sm-6 col-lg-4" key={idx}>
              <div className="card school-card h-100">
                <div className="position-relative">
                  <img src={school.image} className="card-img-top" loading="lazy" alt={school.name} />
                  <div className="rating-badge">
                    {school.rating} <i className="fas fa-star ms-1"></i>
                  </div>
                </div>
                <div className="driving-school-card-body">
                  <h5 className="driving-school-card-title">{school.name}</h5>
                  <p className="driving-school-card-text">{school.experience}</p>
                  <p className="driving-school-card-text">{school.instructors}</p>
                  <p className="driving-school-card-text text-muted">
                    <i className="fas fa-map-marker-alt me-1"></i>{school.location}
                  </p>

                  {/* Replace href="#" with a real link or a button */}
                  <button className="btn schools-View-btn w-100">View Details</button>

                  {/* If using React Router, use:
                  <Link to={`/schools/${school.id}`} className="btn schools-View-btn w-100">View Details</Link>
                  */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DrivingSchools;
