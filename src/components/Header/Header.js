import React from "react";
import "./style.css";

export default function Header() {
  return (
    <header className="main-header">
      <nav className="navbar navbar-dark shadow-sm">
        <div className="container d-flex justify-content-between">
          <span href="#" className="navbar-brand d-flex align-items-center">
            <strong>flixus</strong>
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarHeader"
            aria-controls="navbarHeader"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
