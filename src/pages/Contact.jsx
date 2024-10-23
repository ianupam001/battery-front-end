import { useState } from "react";
import Breadcrumb from "../components/sections/home1/Breadcrumb";
import { Link } from "react-router-dom";
import { Alert, Button, FileInput, Select, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export default function Contact() {

  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("safsd");
    try {
      const res = await fetch('/api/inquiry/create', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }

      if (res.ok) {
        setPublishError("Thank you so much for contacting with us");
        // navigate(`/dashboard?tab=services`);
      }
    } catch (error) {
      setPublishError("Something went wrong");
    }
  };

  const title = "Contact";
  const breadcrumbs = [
    { name: "Home", link: "/" },
    { name: "Contact" }, // No link for the current page
  ];

  return (
    <div>
      <Breadcrumb title={title} breadcrumbs={breadcrumbs} />
      {/*Contact Two Start*/}
      <section className="contact-two">
        <div className="container">
          <div className="row">
            {/*Contact Two Single Start*/}
            <div className="col-xl-4 col-lg-4">
              <div className="contact-two__single">
                <div className="contact-two__icon">
                  <span className="icon-call"></span>
                </div>
                <p>Contact Us</p>
                <h3>
                  <Link href="tel:558270575405">+55 827 057 5405</Link>
                </h3>
              </div>
            </div>
            {/*Contact Two Single End*/}
            {/*Contact Two Single Start*/}
            <div className="col-xl-4 col-lg-4">
              <div className="contact-two__single">
                <div className="contact-two__icon">
                  <span className="icon-envelope"></span>
                </div>
                <p>Mail Us</p>
                <h3>
                  <Link href="mailto:example@gamil.com">example@gamil.com</Link>
                </h3>
              </div>
            </div>
            {/*Contact Two Single End*/}
            {/*Contact Two Single Start*/}
            <div className="col-xl-4 col-lg-4">
              <div className="contact-two__single">
                <div className="contact-two__icon">
                  <span className="icon-location"></span>
                </div>
                <p>Our Office Location</p>
                <h3>12 Green Road 05 New Yark</h3>
              </div>
            </div>
            {/*Contact Two Single End*/}
          </div>
        </div>
      </section>
      {/*Contact Two End*/}

      {/*Contact Three Start*/}
      <section className="contact-three">
        <div className="container">
          <div className="contact-three__inner">
            <div className="row">
              <div className="col-xl-6">
                <div className="contact-three__left">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                    className="google-map__one"
                  ></iframe>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="contact-three__right">
                  <h3 className="contact-three__form-title">
                    Get A Free Quote
                  </h3>
                  <form
                    id="contact-form"
                    className="contact-form-validated contact-three__form"
                    onSubmit={handleSubmit}
                    method="POST"
                  >
                    <div className="row">
                      <div className="col-xl-6 col-lg-6">
                        <div className="contact-three__input-box">
                          <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            required=""
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="contact-three__input-box">
                          <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required=""
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="contact-three__input-box">
                          <input
                            type="number"
                            placeholder="Mobile"
                            name="phone"
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="contact-three__input-box">
                          <input
                            type="text"
                            placeholder="Company"
                            name="company"
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                company: e.target.value,
                              })
                            }
                          />
                          <input
                            type="hidden"
                            placeholder=""
                            name="inquiry_type"
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                inquiry_type: 'Contact',
                              })
                            }
                          />
                          <input
                            type="text"
                            placeholder=""
                            name="inquiry_type"
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                inquiry_type: 'Service',
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="contact-three__input-box text-message-box">
                          <textarea
                            name="message"
                            placeholder="Messege"
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                message: e.target.value,
                              })
                            }
                          ></textarea>
                        </div>
                        <div className="contact-three__btn-box">
                          <Button
                            type="submit"
                            className="thm-btn contact-three__btn"
                          >
                            Send a message
                          </Button>
                        </div>

                        {publishError && (
                          <Alert className="mt-5" color="failure">
                            {publishError}
                          </Alert>
                        )}
                      </div>
                    </div>
                  </form>
                  <p className="ajax-response mb-0"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Contact Three End*/}

    </div>
  );
}
