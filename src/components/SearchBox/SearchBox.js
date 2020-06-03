import React from "react";
import "./style.css";

export default function SearchBox({ onQuery }) {
  return (
    <form className="search-box">
      <div className="search-bar input-group md-form form-sm form-1 pl-0">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-text1">
            <i className="fas fa-search text-secondary" aria-hidden="true"></i>
          </span>
        </div>
        <input
          className="form-control my-0 py-1"
          type="text"
          placeholder="Search movie by name"
          aria-label="Search"
          onChange={(e) => onQuery(e.target.value)}
        />
      </div>
    </form>
  );
}
