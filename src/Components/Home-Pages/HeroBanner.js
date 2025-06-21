import React from "react";
import "./HeroBanner.css";

const HeroBanner = () => {
  return (
    <section className="hero-banner d-flex align-items-center justify-content-center text-center">
      <div className="container">
        <h1 className="hero-title mb-4">
          Start Your Driving Journey Today
        </h1>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <div className="input-group hero-input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter preferred location"
                aria-label="Location"
              />
              <div className="btn find-location-btn" type="button">
                Find Location
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
