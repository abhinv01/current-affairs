import React from "react";
import logo from "../images/logo512.png";
import "../css/navbar.css";

const Navbar = ({ setCategory, category, setLoading }) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary p-0"
      style={{ backgroundColor: "red" }}
    >
      <div className="container-fluid navbar-container">
        <span className="navbar-brand">
          <img src={logo} className="navbar-image-logo" alt="logo"></img>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <span
                className={`nav-link navbar-single-navitem ${
                  category === "general" ? "active" : ""
                }`}
                aria-current="page"
                onClick={() => {
                  setLoading(true);
                  setCategory("general");
                }}
              >
                general
              </span>
            </li>
            <li className="nav-item">
              <span
                className={`nav-link navbar-single-navitem ${
                  category === "business" ? "active" : ""
                }`}
                aria-current="page"
                onClick={() => {
                  setLoading(true);
                  setCategory("business");
                }}
              >
                business
              </span>
            </li>
            <li className="nav-item">
              <span
                className={`nav-link navbar-single-navitem ${
                  category === "entertainment" ? "active" : ""
                }`}
                aria-current="page"
                onClick={() => {
                  setLoading(true);
                  setCategory("entertainment");
                }}
              >
                entertainment
              </span>
            </li>
            <li className="nav-item">
              <span
                className={`nav-link navbar-single-navitem ${
                  category === "health" ? "active" : ""
                }`}
                aria-current="page"
                onClick={() => {
                  setLoading(true);
                  setCategory("health");
                }}
              >
                health
              </span>
            </li>
            <li className="nav-item">
              <span
                className={`nav-link navbar-single-navitem ${
                  category === "science" ? "active" : ""
                }`}
                aria-current="page"
                onClick={() => {
                  setLoading(true);
                  setCategory("science");
                }}
              >
                science
              </span>
            </li>
            <li className="nav-item">
              <span
                className={`nav-link navbar-single-navitem ${
                  category === "sports" ? "active" : ""
                }`}
                aria-current="page"
                onClick={() => {
                  setLoading(true);
                  setCategory("sports");
                }}
              >
                sports
              </span>
            </li>
            <li className="nav-item">
              <span
                className={`nav-link navbar-single-navitem ${
                  category === "technology" ? "active" : ""
                }`}
                aria-current="page"
                onClick={() => {
                  setLoading(true);
                  setCategory("technology");
                }}
              >
                technology
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
