import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// ✅ Validation schema using Yup
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  phone: Yup.string()
    .matches(/^\d+$/, "Only digits allowed")
    .length(10, "Phone must be exactly 10 digits")
    .required("Phone is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

export default function Contact() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://personal-portfolio-ochre-seven-99.vercel.app/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      );

      if (response.ok) {
        setStatus(
          `✅ Thanks for contacting me, ${values.name}! I’ll respond shortly.`
        );
        resetForm();
      } else {
        setStatus("❌ Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ An error occurred. Try again later.");
    }
    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="section-contact-2 pt-8 position-relative pb-60 overflow-hidden"
    >
      <div className="container position-relative z-1">
        <div className="row align-items-center">
          <div className="col-lg-7 pb-5 pb-lg-0">
            <h3 className="text-primary-2 mb-3">Let’s connect</h3>
            <Formik
              initialValues={{
                name: "",
                phone: "",
                email: "",
                subject: "",
                message: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form noValidate>
                  <div className="row g-3">
                    {/* Name */}
                    <div className="col-md-6">
                      <Field name="name">
                        {({ field, form }) => (
                          <>
                            <input
                              {...field}
                              type="text"
                              placeholder="Your name"
                              className={`form-control bg-3 border rounded-3 ${
                                form.touched.name && form.errors.name
                                  ? "is-invalid"
                                  : ""
                              }`}
                            />
                            {form.touched.name && form.errors.name && (
                              <div className="text-danger small">
                                {form.errors.name}
                              </div>
                            )}
                          </>
                        )}
                      </Field>
                    </div>

                    {/* Phone */}
                    <div className="col-md-6">
                      <Field name="phone">
                        {({ field, form }) => (
                          <>
                            <input
                              {...field}
                              type="text"
                              placeholder="Phone"
                              maxLength={10}
                              inputMode="numeric"
                              onChange={(e) => {
                                const onlyNums = e.target.value.replace(
                                  /\D/g,
                                  ""
                                );
                                form.setFieldValue("phone", onlyNums);
                              }}
                              className={`form-control bg-3 border rounded-3 ${
                                form.touched.phone && form.errors.phone
                                  ? "is-invalid"
                                  : ""
                              }`}
                            />
                            {form.touched.phone && form.errors.phone && (
                              <div className="text-danger small">
                                {form.errors.phone}
                              </div>
                            )}
                          </>
                        )}
                      </Field>
                    </div>

                    {/* Email */}
                    <div className="col-md-6">
                      <Field name="email">
                        {({ field, form }) => (
                          <>
                            <input
                              {...field}
                              type="email"
                              placeholder="Email"
                              autoComplete="email"
                              className={`form-control bg-3 border rounded-3 ${
                                form.touched.email && form.errors.email
                                  ? "is-invalid"
                                  : ""
                              }`}
                            />
                            {form.touched.email && form.errors.email && (
                              <div className="text-danger small">
                                {form.errors.email}
                              </div>
                            )}
                          </>
                        )}
                      </Field>
                    </div>

                    {/* Subject */}
                    <div className="col-md-6">
                      <Field name="subject">
                        {({ field, form }) => (
                          <>
                            <input
                              {...field}
                              type="text"
                              placeholder="Subject"
                              className={`form-control bg-3 border rounded-3 ${
                                form.touched.subject && form.errors.subject
                                  ? "is-invalid"
                                  : ""
                              }`}
                            />
                            {form.touched.subject && form.errors.subject && (
                              <div className="text-danger small">
                                {form.errors.subject}
                              </div>
                            )}
                          </>
                        )}
                      </Field>
                    </div>

                    {/* Message */}
                    <div className="col-12">
                      <Field name="message">
                        {({ field, form }) => (
                          <>
                            <textarea
                              {...field}
                              rows="4"
                              placeholder="Message"
                              className={`form-control bg-3 border rounded-3 ${
                                form.touched.message && form.errors.message
                                  ? "is-invalid"
                                  : ""
                              }`}
                            />
                            {form.touched.message && form.errors.message && (
                              <div className="text-danger small">
                                {form.errors.message}
                              </div>
                            )}
                          </>
                        )}
                      </Field>
                    </div>

                    {/* Submit button */}
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-primary-2 rounded-2"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message{" "}
                            <i className="ri-arrow-right-up-line" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>

            {/* Status message */}
            {status && (
              <div
                className={`mt-3 px-3 py-2 rounded-2 fw-semibold ${
                  status.startsWith("✅")
                    ? "bg-success text-white"
                    : "bg-danger text-white"
                }`}
              >
                {status}
              </div>
            )}
          </div>

          <div className="col-lg-5 d-flex flex-column ps-lg-8">
            <ContactItem
              icon="ri-phone-fill"
              label="Phone Number"
              value="+91 7982683629"
              link="tel: 7982683629"
            />
            <ContactItem
              icon="ri-mail-fill"
              label="Email"
              value="adityasangwan4u@gmail.com"
              link="mailto:adityasangwan@gmail.com"
            />
            <ContactItem
              icon="ri-linkedin-fill"
              label="LinkedIn"
              value="Aditya Sangwan"
              link="https://www.linkedin.com/in/aditya-sangwan-b37831370"
            />
            <ContactItem
              icon="ri-map-2-fill"
              label="Address"
              value="Chipyana Buzurg, ghaziabad"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, label, value, link }) {
  return (
    <div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
      <div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
        <i className={`${icon} text-primary-2 fs-26`} />
      </div>
      <div className="ps-3 h-100">
        <span className="text-400 fs-6">{label}</span>
        <h6 className="mb-0">{value}</h6>
      </div>
      {link && (
        <a
          href={link}
          target={link.startsWith("http") ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="position-absolute top-0 start-0 w-100 h-100"
        />
      )}
    </div>
  );
}
