import Breadcrumb from "../components/sections/home1/Breadcrumb";
import AboutHome from "../components/sections/home1/About";
import Video from "../components/sections/home1/Video";
// import Brand from '../components/sections/home1/Brand';
import Funfacts from "../components/sections/home1/Funfacts";
import Testimonial from "../components/sections/home1/Testimonial";
import { Helmet } from "react-helmet-async";
import Process from "../components/Process";
import { useEffect, useState } from "react";
const apiUrl = import.meta.env.VITE_BASE_URL;
export default function About() {
  const title = "About";
  const breadcrumbs = [
    { name: "Home", link: "/" },
    { name: "About" }, // No link for the current page
  ];

  const [metaTags, setMetaTags] = useState(null);
  useEffect(() => {
    try {
      const fetchMetadata = async () => {
        const res = await fetch(`${apiUrl}/api/metatags/about`);
        const data = await res.json();
        // console.log(res)
        if (res.ok) {
          setMetaTags(data);
        }
      };
      fetchMetadata();
    } catch (error) {
      console.error(error.message);
    }
  }, []);
  // console.log(metaTags);

  return (
    <div>
      <Helmet>
        <title>{metaTags?.title || ""}</title>
        <meta
          name={metaTags?.description || "" }
          content={metaTags?.keywords || ""}
        />
        { metaTags?.other || ""}
      </Helmet>
      <Breadcrumb title={title} breadcrumbs={breadcrumbs} />
      <AboutHome />
      
      <Video />
      <Funfacts />
      <Testimonial />
    </div>
  );
}
