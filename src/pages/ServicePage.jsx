import { Button, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import CommentSection from "../components/CommentSection";
import ServiceCard from "../components/PostCard";
import { ContactForm } from "../components/elements/ContactForm";
import { Helmet } from "react-helmet-async";
const apiUrl = import.meta.env.VITE_BASE_URL;
export default function ServicePage() {
  const location = useLocation();
  const sourcePage = location.pathname;
  const { serviceSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [service, setService] = useState(null);
  const [recentServices, setRecentServices] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${apiUrl}/api/service/getservices?slug=${serviceSlug}`
        );
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setService(data.services[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchService();
  }, [serviceSlug]);

  useEffect(() => {
    try {
      const fetchRecentServices = async () => {
        const res = await fetch(`${apiUrl}/api/service/getservices?limit=6`);
        const data = await res.json();
        if (res.ok) {
          setRecentServices(data.services);
        }
      };
      fetchRecentServices();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );
  return (
    <>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="title" content={service.metaTitle} />
        <meta name="description" content={service.metaDescription} />
      </Helmet>
      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__left">
                <div className="service-details__img">
                  <img
                    src={service && service.image}
                    alt={service && service.title}
                    className="p-3 max-h-[500px] w-full object-cover"
                  />
                </div>
                <h1 className="service-details__title-1">
                  {service && service.title}
                </h1>
                <div
                  className="post-content"
                  dangerouslySetInnerHTML={{
                    __html: service && service.content,
                  }}
                ></div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="service-details__sidebar">
                <div className="service-details__services-box">
                  <h3 className="service-details__services-title">
                    Our Service
                  </h3>
                  <ul className="service-details__services-list list-unstyled">
                    {recentServices &&
                      recentServices?.map((service, index) => (
                        <li key={index}>
                          <Link to={`/service/${service.slug}`}>
                            {service.title}
                            <span className="icon-arrow-right"></span>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="service-details__services-box">
                  <div className="">
                    <ContactForm sourcePage={sourcePage} />
                  </div>
                </div>
                <div className="project-details__get-started">
                  <h3 className="project-details__get-started-title">
                    Get Started Today
                  </h3>
                  <p className="project-details__get-started-text">
                    Get fast on-site and roadside battery services in Dubai.
                  </p>
                  <ul className="project-details__get-started-points list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="icon-call"></span>
                      </div>
                      <p>
                        <Link href="tel:+971509344668">+971 50 934 4668</Link>
                      </p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-envelope"></span>
                      </div>
                      <p>
                        <Link href="mailto:support@800bbattery.com">
                          support@800bbattery.com
                        </Link>
                      </p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-location"></span>
                      </div>
                      <p>
                        Al Asayel Street - 160St Warehouse no. 2 - 318th Rd -
                        near Al Ahli Driving school - Al Quoz Industrial Area 3
                        - Dubai
                      </p>
                    </li>
                  </ul>
                  <div className="project-details__get-started-btn-box">
                    <Link
                      href="#"
                      className="project-details__get-started-btn thm-btn"
                    >
                      get in touch
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
