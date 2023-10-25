import React from "react";
// import { a } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary fixed-hrefp"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            NewsFunnky
          </a>
          <buthrefn
            className="navbar-hrefggler"
            type="buthrefn"
            data-bs-hrefggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="hrefggle navigation"
          >
            <span className="navbar-hrefggler-icon"></span>
          </buthrefn>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-a" aria-current="page" href="/">
                  Home|General
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-a" href="/Business">
                  Business
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-a" href="/Entertainment">
                  Entertainment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-a" href="/Health">
                  Health
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-a" href="/Science">
                  Science
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-a" href="/Sports">
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-a" href="/Technology">
                  Technology
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar