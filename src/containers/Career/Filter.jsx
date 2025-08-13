import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Career.scss";
import { jobs } from "./CareerContent";

const Filter = ({
  filters = {
    type: "",
    location: "",
    experience: "",
    industry: "",
  },
  searchText = "",
  onFilterChange = () => { },
  onSearch = () => { },
  onClear = () => { },
}) => {
  const [options, setOptions] = useState({
    type: [],
    location: [],
    experience: [],
    industry: [],
  });

  useEffect(() => {
    const extractUnique = key =>
      [...new Set((jobs || []).map(job => job?.[key]).filter(Boolean))];

    setOptions({
      type: extractUnique("type"),
      location: extractUnique("location"),
      experience: extractUnique("experience"),
      industry: extractUnique("industry"),
    });
  }, []);

  const handleSelectChange = (field, value) => {
    onFilterChange({ ...filters, [field]: value });
  };

  return (
    <div className="job-filter-container" role="region" aria-label="Job filter section">
      <div className="filter-top-row">
        <div className="filter-group">
          <label htmlFor="search-jobs">What do you want to do?</label>
          <input
            type="text"
            id="search-jobs"
            className="filter-input"
            placeholder="Search jobs"
            value={searchText}
            onChange={e => onSearch(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <label htmlFor="industry">Industry</label>
          <select
            id="industry"
            className="filter-select"
            value={filters.industry}
            onChange={e => handleSelectChange("industry", e.target.value)}
          >
            <option value="">All Industries</option>
            {options.industry.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="location">Location</label>
          <select
            id="location"
            className="filter-select"
            value={filters.location}
            onChange={e => handleSelectChange("location", e.target.value)}
          >
            <option value="">All Locations</option>
            {options.location.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>


      <div className="filter-bottom-row">
        <div className="filter-group">
          <label htmlFor="experience">Experience</label>
          <select
            id="experience"
            className="filter-select"
            value={filters.experience}
            onChange={e => handleSelectChange("experience", e.target.value)}
          >
            <option value="">All Levels</option>
            {options.experience.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="job-types">Job Types</label>
          <select
            id="job-types"
            className="filter-select"
            value={filters.type}
            onChange={e => handleSelectChange("type", e.target.value)}
          >
            <option value="">All Types</option>
            {options.type.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div className="clear-button-container">
          <button
            className="clear-button"
            type="button"
            onClick={onClear}
            aria-label="Clear all filters"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
};

Filter.propTypes = {
  filters: PropTypes.shape({
    type: PropTypes.string,
    location: PropTypes.string,
    experience: PropTypes.string,
    industry: PropTypes.string,
  }),
  searchText: PropTypes.string,
  onFilterChange: PropTypes.func,
  onSearch: PropTypes.func,
  onClear: PropTypes.func,
};

export default Filter;