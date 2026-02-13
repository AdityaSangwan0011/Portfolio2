import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Link } from "react-router-dom";
import ThemeSwitch from "../../components/ThemeSwitch";

export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {
  return (
    <>
      <div
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2 ${
          isMobileMenu ? "sidebar-visible" : ""
        }`}
      >
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-logo">
            <Link
              className="navbar-brand d-flex main-logo align-items-center"
              to="/"
            >
              <img
                src="assets/imgs/home-page-2/template/favicon.svg"
                alt="Aditya"
              />
              <span className="fs-4 ms-2">Aditya Sangwan</span>
            </Link>
            <div
              className={`burger-icon burger-icon-white border rounded-3 ${
                isMobileMenu ? "burger-close" : ""
              }`}
              onClick={handleMobileMenu}
            >
              <span className="burger-icon-top" />
              <span className="burger-icon-mid" />
              <span className="burger-icon-bottom" />
            </div>
          </div>
          <div className="mobile-header-content-area">
            <PerfectScrollbar className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <nav>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" href="#about">
                        About me
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#resume">
                        Resume
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#services">
                        Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#portfolio">
                        Portfolio
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#blog">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </PerfectScrollbar>
          </div>
        </div>
      </div>
    </>
  );
}
