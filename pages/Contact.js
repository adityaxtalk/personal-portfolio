import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState(null); // success | error | null

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        // Replace this with actual API request if needed
        console.log("Form Data:", values);
        setStatus("success");
        resetForm();
      } catch (err) {
        setStatus("error");
      }
    },
  });

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <div>
          <div className="contact__information">
            <i className="uil uil-phone-alt contact__icon"></i>
            <div>
              <h3 className="contact__title">Call me</h3>
              <span className="contatc__subtitle">(+91) 7391009814</span>
            </div>
          </div>

          <div className="contact__information">
            <i className="uil uil-envelope contact__icon"></i>
            <div>
              <h3 className="contact__title">E-mail</h3>
              <span className="contatc__subtitle">adityamaxjee@gmail.com</span>
            </div>
          </div>

          <div className="contact__information">
            <i className="uil uil-map-marker contact__icon"></i>
            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contatc__subtitle">Ghaziabad, India</span>
            </div>
          </div>
        </div>

        <form onSubmit={formik.handleSubmit} className="contact__form grid">
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label className="contact__label">Name</label>
              <input
                type="text"
                name="name"
                className="contact__input"
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name && (
                <div className="error-msg">{formik.errors.name}</div>
              )}
            </div>

            <div className="contact__content">
              <label className="contact__label">E-mail</label>
              <input
                type="email"
                name="email"
                className="contact__input"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="error-msg">{formik.errors.email}</div>
              )}
            </div>
          </div>

          <div className="contact__content">
            <label className="contact__label">Subject</label>
            <input
              type="text"
              name="subject"
              className="contact__input"
              {...formik.getFieldProps("subject")}
            />
            {formik.touched.subject && formik.errors.subject && (
              <div className="error-msg">{formik.errors.subject}</div>
            )}
          </div>

          <div className="contact__content">
            <label className="contact__label">Message</label>
            <textarea
              name="message"
              rows="7"
              className="contact__input"
              {...formik.getFieldProps("message")}
            ></textarea>
            {formik.touched.message && formik.errors.message && (
              <div className="error-msg">{formik.errors.message}</div>
            )}
          </div>

          <div>
            <button type="submit" className="button button--flex">
              Send Message
              <i className="uil uil-message button__icon"></i>
            </button>
          </div>

          {status === "success" && (
            <div className="success-msg">
              <i className="uil uil-check-circle skills__icon"></i>
              I will contact you shortly.
            </div>
          )}
          {status === "error" && (
            <div className="error-msg">
              <i className="uil uil-times-circle skills__icon"></i>
              Oops, there is an error.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
