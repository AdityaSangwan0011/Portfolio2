import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import Static from "./Static";
import Services from "./Services";
import Projects from "./Projects";
import Skills from "./Skills";
import Blog from "./Blog";
import Contact from "./Contact";
import Education from "./Education";

export default function Home() {
  return (
    <>
      <section
        id="about"
        className="section-hero-2 position-relative pt-130 pb-3"
      >
        <div className="container hero-2">
          <div className="border border-1 rounded-3">
            <div className="box-linear-animation position-relative z-1">
              <div className="row align-items-end py-60">
                <div className="col-lg-5 ps-lg-5 text-lg-start text-center">
                  <div className="position-relative mb-lg-0 mb-5">
                    <img
                      src="assets/imgs/home-page-2/hero-1/profile.svg"
                      alt="Aditya Sangwan"
                      loading="eager"
                    />

                    <div className="position-absolute end-0 top-100 translate-middle-y icon-decorate">
                      <img
                        src="assets/imgs/home-page-2/hero-1/icon.svg"
                        alt="Aditya Sangwan"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mx-lg-auto col-md-12">
                  <div className="p-lg-0 p-md-8 p-3">
                    <div className="text-secondary-2 d-flex align-items-center custom-hide">
                      &lt;span&gt;
                      <div className="text-dark">
                        <div className="typewriter">
                          <h1 className="fs-6 fw-medium">I’m Aditya Sangwan</h1>
                        </div>
                      </div>
                      &lt;/span&gt;
                    </div>
                    <h1 className="fs-50 my-3">
                      <span
                        role="img"
                        aria-label="waving hand"
                        className="wave-hand"
                      >
                        👋
                      </span>{" "}
                      A<span className="text-linear-4"> Full Stack </span>
                      Web Developer
                      <span className="flicker">_</span>
                    </h1>
                    <p className="mb-6 text-secondary-2">
                      With hands-on experience in
                      <span className="text-dark">
                        {" "}
                        Node.js, React, Express.js, MongoDB, Tailwind CSS,
                      </span>
                      , I specialize in building modern, scalable, and
                      user-friendly web applications tailored to meet real-world
                      business needs across eCommerce and CMS platforms.
                    </p>

                    <div className="row">
                      <div className="col-7">
                        {/* Carousel Scroll */}
                        <Marquee className="carouselTicker carouselTicker-left position-relative z-1 mt-lg-0 mt-8">
                          <ul className="carouselTicker__list ">
                            <li className="carouselTicker__item">
                              <Link
                                to="#"
                                className="brand-logo icon_60 icon-shape rounded-3"
                              >
                                <img
                                  src="assets/imgs/home-page-2/hero-1/icon-6.svg"
                                  alt="brand"
                                />
                              </Link>
                            </li>
                            <li className="carouselTicker__item">
                              <Link
                                to="#"
                                className="brand-logo icon_60 icon-shape rounded-3"
                              >
                                <img
                                  src="assets/imgs/home-page-2/hero-1/javascript.svg"
                                  alt="brand"
                                  width={30}
                                  height={30}
                                />
                              </Link>
                            </li>
                            <li className="carouselTicker__item">
                              <Link
                                to="#"
                                className="brand-logo icon_60 icon-shape rounded-3"
                              >
                                <img
                                  src="assets/imgs/home-page-2/hero-1/github.svg"
                                  alt="brand"
                                  width={35}
                                  height={35}
                                />
                              </Link>
                            </li>
                            <li className="carouselTicker__item">
                              <Link
                                to="#"
                                className="brand-logo icon_60 icon-shape rounded-3"
                              >
                                <img
                                  src="assets/imgs/home-page-2/hero-1/icon-4.svg"
                                  alt="brand"
                                />
                              </Link>
                            </li>
                            <li className="carouselTicker__item">
                              <Link
                                to="#"
                                className="brand-logo icon_60 icon-shape rounded-3"
                              >
                                <img
                                  src="assets/imgs/home-page-2/hero-1/icon-5.svg"
                                  alt="brand"
                                />
                              </Link>
                            </li>
                          </ul>
                        </Marquee>
                      </div>
                      <div className="col-5 d-flex align-items-end">
                        <span className="fs-6 text-300 mb-2">...and more</span>
                      </div>
                    </div>
                    <Link
                      to="/assets/Aditya.docx"
                      className="btn me-2 text-300 ps-0 mt-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="ri-download-line text-primary-2" />[
                      Download my CV ]
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="position-absolute top-0 start-0 w-100 h-100 filter-invert"
          style={{
            backgroundImage: "url('assets/imgs/hero/hero-1/background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </section>
      {/* <Static /> */}
      <Services />
      <Education />
      <Projects />
      <Skills />
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
