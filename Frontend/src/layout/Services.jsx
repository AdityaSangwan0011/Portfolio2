import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section id="services" className="section-service-2 pt-5">
      <div className="container">
        <div className="rounded-3 border border-1 position-relative overflow-hidden">
          <div className="box-linear-animation position-relative z-1 p-lg-5 p-3">
            <div className="text-center">
              <div className="d-flex align-items-center justify-content-center">
                <i className="ri-service-line text-primary-2 me-2"></i>
                <span className="text-linear-4"> Services </span>
              </div>
              <h3>
                Crafting Solutions&nbsp;
                <span className="text-300">tailored to your needs</span>
              </h3>
            </div>
            <div className="container mt-5">
              <div className="row g-4">
                {serviceList.map((service, index) => (
                  <div key={index} className="col-lg-4 col-md-6">
                    <div className="card-servies-2 rounded-2 h-100 hover-up">
                      <i className={`${service.icon} text-primary-2 fs-2`}></i>
                      <h6 className="my-3 fw-medium">{service.title}</h6>
                      <p className="fs-7 text-300 fw-regular">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center pt-60">
                <p className="text-300">
                  Excited to take on{" "}
                  <span className="text-dark">new projects</span> and
                  collaborate.
                  <br />
                  Let's chat about your ideas.{" "}
                  <a href="#contact" className="text-primary-2">
                    Reach out!
                  </a>
                </p>
              </div>
            </div>
            <img
              className="position-absolute top-0 start-0 z-0"
              src="assets/imgs/home-page-2/services/bg.png"
              alt="Services"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const serviceList = [
  {
    title: "Full-Stack Web Development",
    description:
      "Designing and building dynamic, responsive applications using MERN stack (MongoDB, Express.js, React.js, Node.js) with a focus on seamless user experiences.",
    icon: "ri-code-s-slash-line",
  },
  {
    title: "API Integration & Development",
    description:
      "Building and integrating RESTful APIs to enable smooth communication between frontend and backend systems.",
    icon: "ri-exchange-line",
  },
  {
    title: "E-commerce Solutions",
    description:
      "Creating scalable e-commerce platforms with custom cart, payment integration, and dashboard features to enhance online business growth.",
    icon: "ri-shopping-cart-2-line",
  },
  {
    title: "Performance Optimization",
    description:
      "Boosting website speed, applying SEO practices, and writing clean, efficient code to optimize user experience and search visibility.",
    icon: "ri-speed-line",
  },
  {
    title: "Responsive UI/UX Design",
    description:
      "Crafting mobile-first, responsive designs with React, Tailwind, and Styled Components for a smooth cross-device experience.",
    icon: "ri-smartphone-line",
  },
  {
    title: "Dashboard & Analytics",
    description:
      "Developing modern dashboards with data visualization, charts, and reports for hotels, room services, and management systems.",
    icon: "ri-bar-chart-2-line",
  },
  {
    title: "Custom Web Solutions",
    description:
      "Delivering tailored web apps for startups, small businesses, and enterprises that align with specific business needs.",
    icon: "ri-tools-line",
  },
  {
    title: "React Development",
    description:
      "Building interactive, component-based user interfaces with React.js, React Router, and React Hook Form for modern web applications.",
    icon: "ri-reactjs-line",
  },
  {
    title: "JavaScript Projects",
    description:
      "Creating practical and creative projects using vanilla JavaScript to strengthen problem-solving, DOM manipulation, and core programming skills.",
    icon: "ri-javascript-line",
  },
];
