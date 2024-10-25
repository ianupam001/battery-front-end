import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import Breadcrumb from "../components/sections/home1/Breadcrumb";
const apiUrl = import.meta.env.VITE_BASE_URL;
export default function Services() {
  const title = "Services";
  const breadcrumbs = [
    { name: "Home", link: "/" },
    { name: "Services" }, // No link for the current page
  ];
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const res = await fetch(`${apiUrl}/api/service/getServices`);
      const blogpost = await res.json();
      setServices(blogpost.services);
    };
    fetchServices();
  }, []);
  console.log(services);
  return (
    <>
      <Breadcrumb title={title} breadcrumbs={breadcrumbs} />
      {/*Blog One Start*/}
      {services && services.length > 0 && (
        <section className="blog-list">
          <div className="container">
            <div className="row">
              {/*Blog One Single Start*/}
              {services.map((post) => (
                <ServiceCard key={post._id} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
