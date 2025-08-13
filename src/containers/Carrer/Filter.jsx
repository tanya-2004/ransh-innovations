import React from 'react';
import './Carrer.css';

const JobFilter = () => {
  return (
    <div className="job-filter-container">
      <div className="filter-group">
        <label htmlFor="search-jobs">What do you want to do?</label>
        <input
          type="text"
          id="search-jobs"
          placeholder="Search jobs"
          className="filter-input"
        />
      </div>
      <div className="filter-group">
        <label htmlFor="industries">Industries</label>
        <select id="industries" className="filter-select">
          <option value="" disabled selected>
            Select Industries
          </option>
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="location">Location</label>
        <select id="location" className="filter-select">
          <option value="" disabled selected>
            Select Location
          </option>
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="experience">Experience</label>
        <select id="experience" className="filter-select">
          <option value="" disabled selected>
            Select Experience
          </option>
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="job-types">Job Types</label>
        <select id="job-types" className="filter-select">
          <option value="" disabled selected>
            Select Job Types
          </option>
        </select>
      </div>
      <div className="clear-button-container">
        <button className="clear-button">Clear Filters</button>
      </div>
    </div>
  );
};

export default JobFilter;
