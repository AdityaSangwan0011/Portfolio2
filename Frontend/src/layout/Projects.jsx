import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const swiperOptions = {
  modules: [Pagination, Navigation],
  slidesPerView: 1,
  slidesPerGroup: 1,
  centeredSlides: false,
  loop: true,
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

export default function Projects() {
  return (
    <>
      <div className="section-projects-2 pt-5">
        <div className="container">
          <div className="rounded-3 border border-1 position-relative overflow-hidden">
            <div className="box-linear-animation position-relative z-1">
              <div className="p-lg-8 p-md-6 p-3 position-relative z-1">
                <div className="d-flex align-items-center">
                  <i className="ri-folder-line text-primary-2 me-2"></i>
                  <span className="text-linear-4 d-flex align-items-center">
                    Projects
                  </span>
                </div>
                <h3>My Recent Works</h3>
                <div className="position-relative">
                  <Swiper
                    {...swiperOptions}
                    className="swiper slider-two pb-3 position-relative"
                  >
                    <div className="swiper-wrapper">
                      <SwiperSlide>
                        <div className="p-lg-5 p-md-4 p-3 border border-1 mt-5 bg-3">
                          <div className="row">
                            <div className="col-lg-5">
                              <div className="project-image-container">
                                <img
                                  src="assets/imgs/home-page-2/projects/MakeSomeoneSmile.png"
                                  alt="Project"
                                />
                              </div>
                            </div>
                            <div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
                              <h4 className="text-linear-4">
                                Aurora — An Interactive Storytelling Experience
                              </h4>
                              <p>
                                A cinematic, framework-free interactive
                                storytelling experience built with vanilla
                                JavaScript — featuring custom animation
                                sequencing, Web Animations API transitions, and
                                audio-synced scene changes across a multi-stage
                                narrative.
                              </p>
                              <ul className="mt-4 list-unstyled">
                                <li className="text-secondary-2 mb-3 border-bottom pb-3">
                                  Project Info
                                </li>
                                <li className="text-dark mb-3 border-bottom pb-3">
                                  <div className="d-flex justify-content-between">
                                    <p className="text-dark mb-0 text-end">
                                      Status
                                    </p>
                                    <p className="text-300 mb-0 text-end">
                                      Ongoing
                                    </p>
                                  </div>
                                </li>{" "}
                                <li className="text-dark mb-3 border-bottom pb-3">
                                  <div className="d-flex justify-content-between">
                                    <p className="text-dark mb-0 text-end">
                                      Pending
                                    </p>
                                    <p className="text-300 mb-0 text-end">
                                      Bugs and UI/UX improvements
                                    </p>
                                  </div>
                                </li>
                                <li className="text-dark mb-3 border-bottom pb-3">
                                  <div className="d-flex justify-content-between">
                                    <p className="text-dark mb-0 text-end">
                                      Completion Time
                                    </p>
                                    <p className="text-300 mb-0 text-end">
                                      1 week with AI
                                    </p>
                                  </div>
                                </li>
                                <li className="text-dark mb-3 border-bottom pb-3">
                                  <div className="d-flex justify-content-between">
                                    <p className="text-dark mb-0 text-end">
                                      Technologies
                                    </p>
                                    <p className="text-300 mb-0 text-end">
                                      HTML5, CSS3, Vanilla JavaScript (ES6+),
                                      Web Animations API, HTML5 Audio API, CSS
                                      Keyframe Animations, Modular JavaScript
                                      Architecture (App Object Pattern)
                                    </p>
                                  </div>
                                </li>
                              </ul>
                              <div className="d-flex flex-wrap align-items-center gap-3 mt-7">
                                <a
                                  href="https://aurora-make-someone-smile.netlify.app/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-300 border-bottom border-1 px-2 pb-2 link-hover"
                                >
                                  <i className="ri-arrow-right-up-line"></i>
                                  Live Demo
                                </a>
                                <a
                                  href="https://github.com/AdityaSangwan0011/Aurora-An-Interactive-Storytelling-Experience"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-300 border-bottom border-1 px-2 pb-2 link-hover"
                                >
                                  <i className="ri-github-fill"></i>
                                  View on Github
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      //!-----------------------------------------------------------------------------
                      <SwiperSlide>
                        <div className="p-lg-5 p-md-4 p-3 border border-1 mt-5 bg-3">
                          <div className="row">
                            <div className="col-lg-5">
                              <div className="project-image-container">
                                <img
                                  src="assets/imgs/home-page-2/projects/ERP Admin Dashboard.png"
                                  alt="Project"
                                />
                              </div>
                            </div>
                            <div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
                              <h4 className="text-linear-4">
                                ERP Admin Dashboard
                                <br />
                                ecommerce system
                              </h4>
                              <p>
                                A responsive ERP admin dashboard built with
                                React 19, Vite, and Tailwind CSS, featuring
                                real-time data visualizations, role-based
                                routing, and protected views for tracking
                                revenue and occupancy metrics.
                              </p>
                              <ul className="mt-4 list-unstyled">
                                <li className="text-secondary-2 mb-3 border-bottom pb-3">
                                  Project Info
                                </li>
                                <li className="text-dark mb-3 border-bottom pb-3">
                                  <div className="d-flex justify-content-between">
                                    <p className="text-dark mb-0 text-end">
                                      Status
                                    </p>
                                    <p className="text-300 mb-0 text-end">
                                      Completed
                                    </p>
                                  </div>
                                </li>
                                <li className="text-dark mb-3 border-bottom pb-3">
                                  <div className="d-flex justify-content-between">
                                    <p className="text-dark mb-0 text-end">
                                      Completion Time
                                    </p>
                                    <p className="text-300 mb-0 text-end">
                                      2 months
                                    </p>
                                  </div>
                                </li>
                                <li className="text-dark mb-3 border-bottom pb-3">
                                  <div className="d-flex justify-content-between">
                                    <p className="text-dark mb-0 text-end">
                                      Technologies
                                    </p>
                                    <p className="text-300 mb-0 text-end">
                                      React 19, Vite 6, Tailwind CSS 4, React
                                      Router 7, ApexCharts, FullCalendar,
                                      Flatpickr, and Mock API.
                                    </p>
                                  </div>
                                </li>
                              </ul>
                              <div className="d-flex flex-wrap align-items-center gap-3 mt-7">
                                <a
                                  href="https://clone-tailadmin.netlify.app/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-300 border-bottom border-1 px-2 pb-2 link-hover"
                                >
                                  <i className="ri-arrow-right-up-line"></i>
                                  Live Demo
                                </a>
                                <a
                                  href="https://github.com/AdityaSangwan0011/ERP-Admin-Dashboard"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-300 border-bottom border-1 px-2 pb-2 link-hover"
                                >
                                  <i className="ri-github-fill"></i>
                                  View on Github
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      //!
                      ////////////////////////////////////////////////////////////////////////////
                      <SwiperSlide>
                        <div className="p-lg-5 p-md-4 p-3 border border-1 mt-5 bg-3">
                          <div className="row">
                            <div className="col-lg-5">
                              <div className="project-image-container">
                                <img
                                  src="assets\imgs\home-page-2\projects\ReactQuiz.png"
                                  alt="Project"
                                />
                              </div>
                            </div>
                            <div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
                              <h4 className="text-linear-4">THE REACT QUIZ</h4>
                              <p>
                                An interactive quiz app built with React,
                                featuring 15+ dynamic questions, optimized state
                                management with useReducer, and a 60% reduction
                                in unnecessary re-renders for smoother
                                performance.
                              </p>
                              <ul className="mt-4 list-unstyled">
                                <li className="text-secondary-2 mb-3 border-bottom pb-3">
                                  Project Info
                                </li>
                                <li className="text-dark mb-3 border-bottom pb-3">
                                  <div className="d-flex justify-content-between">
                                    <p className="text-dark mb-0 text-end">
                                      Status
                                    </p>
                                    <p className="text-300 mb-0 text-end">
                                      Completed
                                    </p>
                                  </div>
                                </li>
                                <li className="text-dark mb-3 border-bottom pb-3">
                                  <div className="d-flex justify-content-between">
                                    <p className="text-dark mb-0 text-end">
                                      Completion Time
                                    </p>
                                    <p className="text-300 mb-0 text-end">
                                      3 weeks
                                    </p>
                                  </div>
                                </li>
                                <li className="text-dark mb-3 border-bottom pb-3">
                                  <div className="d-flex justify-content-between">
                                    <p className="text-dark mb-0 text-end">
                                      Technologies
                                    </p>
                                    <p className="text-300 mb-0 text-end">
                                      React.js (v18), JSON Server (REST API),
                                      CSS3 (Responsive Design), React Hooks
                                      (useReducer/useEffect)
                                    </p>
                                  </div>
                                </li>
                              </ul>
                              <div className="d-flex flex-wrap align-items-center gap-3 mt-7">
                                <a
                                  href="https://the-react-quiz.netlify.app/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-300 border-bottom border-1 px-2 pb-2 link-hover"
                                >
                                  <i className="ri-arrow-right-up-line"></i>
                                  Live Demo
                                </a>
                                <a
                                  href="https://github.com/AdityaSangwan0011/react-quiz"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-300 border-bottom border-1 px-2 pb-2 link-hover"
                                >
                                  <i className="ri-github-fill"></i>
                                  View on Github
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </div>
                  </Swiper>
                  <div className="position-absolute bottom-0 end-0 gap-2 pb-7 pe-5 d-none d-md-flex">
                    <div className="swiper-button-prev end-0 shadow position-relative cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="swiper-button-next end-0 shadow position-relative cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                          fill="#A8FF53"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="position-absolute top-0 start-0 w-100 h-100 filter-invert"
                style={{
                  backgroundImage:
                    "url('assets/imgs/hero/hero-1/background.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
