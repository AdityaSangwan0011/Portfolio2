import React from "react";
import { Link } from "react-router-dom";

export default function OffCanvas({ isOffCanvas, handleOffCanvas }) {
  return (
    <>
      {/* offCanvas-menu */}
      <div className={`offCanvas__info ${isOffCanvas ? "active" : ""} pointer`}>
        <div
          className="offCanvas__close-icon menu-close"
          onClick={handleOffCanvas}
        >
          <button>
            <i className="ri-close-line" />
          </button>
        </div>
        <div className="offCanvas__logo mb-5">
          <h3 className="mb-0">Get in touch</h3>
        </div>
        <div className="offCanvas__side-info mb-30">
          <div className="contact-list mb-30">
            <div className="mb-3">
              <Link to="tel:7065429235">
                <span className="text-400 fs-5">Phone Number</span>
                <p className="mb-0">+91 7982683629</p>
              </Link>
            </div>
            <div className="mb-3">
              <Link to="mailto:adityasangwan4u@gmail.com">
                <span className="text-400 fs-5">Email</span>
                <p className="mb-0">adityasangwan4u@gmail.com</p>
              </Link>
            </div>

            <div className="mb-3">
              <span className="text-400 fs-5">Address</span>
              <p className="mb-0">Chipyana Buzurg, Ghaziabad</p>
            </div>
          </div>
          <div className="contact-list">
            <p className="text-400 fs-5 mb-2">Social</p>
            <div className="d-md-flex d-none gap-3">
              <Link to="https://www.linkedin.com/in/aditya-sangwan-b37831370">
                <i className="ri-linkedin-fill fs-18" />
              </Link>
              <Link to="https://github.com/AdityaSangwan0011">
                <i className="ri-github-fill fs-18" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`offCanvas__overly ${isOffCanvas ? "active" : ""}`}
        onClick={handleOffCanvas}
      />
    </>
  );
}
