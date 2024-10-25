// ContactForm.js
import React, { useState } from "react";

export function ContactForm({ currentPagePath }) {
  const [formData, setFormData] = useState({
    ffname: "",
    email: "",
    phone: "",
    services: "",
    form_message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted from:", currentPagePath);
    console.log("Form Data:", formData);
    // handle form submission logic
  };

  return (
    <form
      id="contact-form"
      name="contact_form"
      className="default-form2"
      onSubmit={handleSubmit}
    >
      <div className="row">
        <div className="col-xl-6 col-lg-12 col-md-12">
          <div className="input-box">
            <input
              type="text"
              name="ffname"
              placeholder="Name *"
              value={formData.ffname}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-xl-6 col-lg-12 col-md-12">
          <div className="input-box">
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6 col-lg-12 col-md-12">
          <div className="input-box">
            <input
              type="text"
              name="phone"
              placeholder="Phone *"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-xl-6 col-lg-12 col-md-12">
          <div className="input-box">
            <input
              type="text"
              name="services"
              placeholder="Our Services *"
              value={formData.services}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12">
          <div className="input-box">
            <textarea
              name="form_message"
              id="formMessage"
              placeholder="Message"
              value={formData.form_message}
              onChange={handleChange}
              required
              aria-required="true"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="product-form-box-checkbox">
            <div className="inner">
              <input type="checkbox" name="remember" id="tag" />
              <label htmlFor="tag">
                <span></span>Save my details in this browser for the next time I
                comment.
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div className="button-box">
            <button className="thm-btn" type="submit">
              <span className="txt">Submit Now</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
