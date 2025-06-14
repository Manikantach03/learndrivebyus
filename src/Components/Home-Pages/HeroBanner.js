import React from "react";
import "./HeroBanner.css";

const HeroBanner = () => {
  return (
    <div className="hero-banner d-flex align-items-center justify-content-center text-center">
      <div className="container">
        <h1 className="hero-title mb-5">Start Your Driving Journey Today</h1>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 w-75">
            <div className="input-group gap-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter preferred Location"
              />
              <button className="btn btn-primary find-btn" type="button">
                Find Location
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
