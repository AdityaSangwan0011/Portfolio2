import React, { useState } from "react";
import ThemeSwitch from "../../components/ThemeSwitch";
import { Link } from "react-router-dom";
import OffCanvas from "./OffCanvas";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isOffCanvas, setIsOffCanvas] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const handleOffCanvas = () => {
    setIsOffCanvas(!isOffCanvas);
  };

  const handleMobileMenu = () => {
    setIsMobileMenu(!isMobileMenu);
  };

  return (
    <>
      <header>
        <div className="container position-relative">
          <div className="position-relative">
            <nav className="navbar navbar-expand-lg navbar-home-2 flex-nowrap z-999 p-0 border border-1 rounded-3">
              <a
                className="navbar-menu cursor-pointer p-4 text-center square-100 menu-tigger icon_80 icon-shape d-none d-md-flex"
                data-bs-target=".offCanvas__info"
                aria-controls="offCanvas__info"
                onClick={handleOffCanvas}
              >
                <i className="ri-menu-2-line" />
              </a>
              <div className="container py-3 px-4">
                <Link
                  className="navbar-brand d-flex main-logo align-items-center"
                  to="/"
                >
                  <img
                    src="assets/imgs/home-page-2/template/favicon.svg"
                    alt="mritunjay"
                  />
                  <span className="fs-4 ms-2">Aditya Sangwan</span>
                </Link>
                <div className="d-none d-lg-flex">
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
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
                  </div>
                </div>
                <div className="navbar-social d-flex align-items-center pe-5 pe-lg-0 me-5 me-lg-0">
                  <div className="d-md-flex d-none gap-3">
                    <Link to="https://linkedin.com/in/mritunjay-singh-022333282/">
                      <i className="ri-linkedin-fill fs-18" />
                    </Link>
                    <Link to="https://github.com/MRITUNJAY-SINGHH">
                      <i className="ri-github-fill fs-18" />
                    </Link>
                  </div>
                  <div
                    className="burger-icon burger-icon-white border rounded-3"
                    onClick={handleMobileMenu}
                  >
                    <span className="burger-icon-top" />
                    <span className="burger-icon-mid" />
                    <span className="burger-icon-bottom" />
                  </div>
                </div>
              </div>
              <ThemeSwitch />
            </nav>
          </div>
          <OffCanvas
            isOffCanvas={isOffCanvas}
            handleOffCanvas={handleOffCanvas}
          />
          <MobileMenu
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
          />
        </div>
      </header>
    </>
  );
}
