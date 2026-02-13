import CountUp from "react-countup";

export default function Static() {
  return (
    <div className="section-static-1 z-0">
      <div className="container position-relative z-1">
        <div className="bg-3 py-60 border border-1 rounded-3 position-relative overflow-hidden">
          <div className="inner">
            <div className="row align-items-center justify-content-lg-around justify-content-center">
              {/* Experience */}
              <div className="col-lg-auto col-md-6 text-center text-lg-start">
                <div className="counter-item-cover counter-item">
                  <div className="content mx-auto">
                    <i className="ri-shape-line text-primary-2" />
                    <h2 className="text-300 my-0 fs-50">
                      <CountUp
                        className="odometer text-dark fw-medium"
                        enableScrollSpy={true}
                        end={2}
                      />
                      <span className="fs-50 text-300 mb-0">+</span>
                    </h2>
                    <p className="fs-6 mb-0 text-dark">Years of Experience</p>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div className="col-lg-auto col-md-6 text-center text-lg-start">
                <div className="counter-item-cover counter-item">
                  <div className="content mx-auto">
                    <i className="ri-computer-line text-primary-2" />
                    <h2 className="text-300 my-0 fs-50">
                      <CountUp
                        className="odometer text-dark fw-medium"
                        enableScrollSpy={true}
                        end={100}
                      />
                      <span className="fs-50 text-300 mb-0">+</span>
                    </h2>
                    <p className="fs-6 mb-0 text-dark">Projects Completed</p>
                  </div>
                </div>
              </div>

              {/* Satisfied Clients */}
              <div className="col-lg-auto col-md-6 text-center text-lg-start">
                <div className="counter-item-cover counter-item">
                  <div className="content mx-auto">
                    <i className="ri-service-line text-primary-2" />
                    <h2 className="text-300 my-0 fs-50">
                      <CountUp
                        className="odometer text-dark fw-medium"
                        enableScrollSpy={true}
                        end={95}
                      />
                      <span className="fs-50 text-300 mb-0">%</span>
                    </h2>
                    <p className="fs-6 mb-0 text-dark">Satisfied Clients</p>
                  </div>
                </div>
              </div>

              {/* API Integrations */}
              <div className="col-lg-auto col-md-6 text-center text-lg-start">
                <div className="counter-item-cover counter-item">
                  <div className="content mx-auto">
                    <i className="ri-exchange-line text-primary-2" />
                    <h2 className="text-300 my-0 fs-50">
                      <CountUp
                        className="odometer text-dark fw-medium"
                        enableScrollSpy={true}
                        end={50}
                      />
                      <span className="fs-50 text-300 mb-0">+</span>
                    </h2>
                    <p className="fs-6 mb-0 text-dark">APIs Integrated</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background Image */}
          <div
            className="position-absolute top-0 start-0 w-100 h-100 filter-invert"
            style={{
              backgroundImage: "url('assets/imgs/hero/hero-1/background.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
      </div>
    </div>
  );
}
