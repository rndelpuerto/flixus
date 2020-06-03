import React from "react";
import "./style.css";

export default function MovieSummary({ posterPath, title }) {
  return (
    <div className="movie-summary card mb-4">
      <img
        className="movie-summary__media img-fluid"
        src={posterPath}
        alt={title}
        title={title}
      />
    </div>
  );
}
