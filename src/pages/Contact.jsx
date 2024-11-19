import { useState, useEffect } from "react";
import Breadcrumb from "../components/sections/home1/Breadcrumb";
import { Link, useParams } from "react-router-dom";
import { Alert, Button } from "flowbite-react";
import { ContactFormContactPage } from "../components/elements/ContactFormContactPage";
import { Helmet } from "react-helmet-async";

const apiUrl = import.meta.env.VITE_BASE_URL;

export default function Contact() {
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);
  const [currentPath, setCurrentPath] = useState("");
  const sourcePage = location.pathname;
  const { serviceSlug } = useParams();
  const [metaTags, setMetaTags] = useState(null);

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/metatags/contact`);
        const data = await res.json();
        if (res.ok) {
          setMetaTags(data);
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchMetadata();
  }, []);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${apiUrl}/api/inquiry/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, sourcePage: currentPath }),
      });
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }
      setPublishError("Thank you so much for contacting us");
    } catch (error) {
      setPublishError("Something went wrong");
    }
  };

  useEffect(() => {
    if (metaTags?.other) {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = metaTags.other;

      const scriptTags = tempDiv.querySelectorAll("script");

      scriptTags.forEach((scriptTag) => {
        const scriptElement = document.createElement("script");
        scriptElement.textContent = scriptTag.innerHTML;
        document.body.appendChild(scriptElement);
        return () => {
          document.body.removeChild(scriptElement);
        };
      });
    }
    if (metaTags?.other) {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = metaTags.other;

      const linkTags = tempDiv.querySelectorAll("link");
      linkTags.forEach((linkTag) => {
        const linkElement = document.createElement("link");
        linkElement.rel = linkTag.rel || "";
        linkElement.href = linkTag.href || "";
        linkElement.type = linkTag.type || "";
        linkElement.media = linkTag.media || "";
        document.head.appendChild(linkElement);
      });
    }
  }, [metaTags]);

  const title = "Contact";
  const breadcrumbs = [{ name: "Home", link: "/" }, { name: "Contact" }];

  return (
    <div>
      <Helmet>
        <title>{metaTags?.title || ""}</title>
        <meta name="description" content={metaTags?.description || ""} />
        <meta name="keywords" content={metaTags?.keywords || ""} />
      </Helmet>
      <Breadcrumb title={title} breadcrumbs={breadcrumbs} />
      <section className="contact-two">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4">
              <div className="contact-two__single">
                <div className="contact-two__icon">
                  <span className="icon-call"></span>
                </div>
                <p>Contact Us</p>
                <h3>
                  <a href="tel:+971 50 934 46685">+971 50 934 4668</a>
                </h3>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              <div className="contact-two__single">
                <div className="contact-two__icon">
                  <span className="icon-envelope"></span>
                </div>
                <p>Mail Us</p>
                <h3>
                  <a href="mailto:support@800bbattery.com">
                    support@800bbattery.com
                  </a>
                </h3>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              <div className="contact-two__single">
                <div className="contact-two__icon">
                  <span className="icon-location"></span>
                </div>
                <p>Our Office Location</p>
                <h3>
                  Al Asayel Street - 160St Warehouse no. 2 - 318th Rd - near Al
                  Ahli Driving school - Al Quoz Industrial Area 3 - Dubai
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-three">
        <div className="container">
          <div className="contact-three__inner">
            <div className="row">
              <div className="col-xl-6">
                <div className="contact-three__left">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4445.013291254087!2d55.21927878663667!3d25.120295377482847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f692dd65e4465%3A0xc7b4c46be55cd897!2s800%20BBattery!5e1!3m2!1sen!2sae!4v1730179961056!5m2!1sen!2sae"
                    className="google-map__one"
                  ></iframe>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="contact-three__right">
                  <h3 className="contact-three__form-title">
                    Get A Free Quote
                  </h3>
                  <ContactFormContactPage sourcePage={sourcePage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
