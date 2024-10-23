import Breadcrumb from "../components/sections/home1/Breadcrumb";
import AboutHome from "../components/sections/home1/About";
import Video from "../components/sections/home1/Video";
// import Brand from '../components/sections/home1/Brand';
import Funfacts from "../components/sections/home1/Funfacts";
import Testimonial from "../components/sections/home1/Testimonial";
import { Helmet } from "react-helmet-async";
export default function About() {
  const title = "About";
  const breadcrumbs = [
    { name: "Home", link: "/" },
    { name: "About" }, // No link for the current page
  ];

  return (
    <div>
      <Helmet>
        <title>About - 800 BBattery</title>
        <meta
          name="description"
          content="General Auto Repair & Car This Maintenance Place"
        />
      </Helmet>
      <Breadcrumb title={title} breadcrumbs={breadcrumbs} />
      <AboutHome />
      <Video />
      <Funfacts />
      <Testimonial />
    </div>
  );
}
