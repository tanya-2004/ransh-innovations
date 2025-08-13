import React from "react";
import "./Career.scss";

const JobCard = ({
  title,
  location,
  type,
  company,
  contact,
  description,
  responsibilities,
  qualifications,
}) => {
  return (
    <article className="job-card" role="region" aria-labelledby={title}>
      <h2>{title}</h2>
      <p className="job-meta">
        <strong>Location:</strong> {location} | <strong>Type:</strong> {type}
      </p>
      <p>{description}</p>

      <details>
        <summary>Key Responsibilities</summary>
        <ul>
          {responsibilities.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </details>

      <details>
        <summary>Key Skills & Qualifications</summary>
        <ul>
          {qualifications.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </details>

      <p><strong>Company:</strong> {company}</p>
      <p>
        <strong>Apply:</strong>{" "}
        <a href={`mailto:${contact}`} aria-label={`Email ${company}`}>
          {contact}
        </a>
      </p>
    </article>
  );
};

export default JobCard;