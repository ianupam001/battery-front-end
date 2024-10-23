import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import AboutHome from "../components/sections/home1/About";
import Blog from "../components/sections/home1/Blog";
import ServiceHighlight from "../components/sections/home1/ServiceHighlight";
import Service from "../components/sections/home1/Service";
import Cta from "../components/sections/home1/Cta";
import Video from "../components/sections/home1/Video";
import Brand from "../components/sections/home1/Brand";
import Funfacts from "../components/sections/home1/Funfacts";
import Testimonial from "../components/sections/home1/Testimonial";
import Banner from "../components/sections/home1/Banner";
import { Helmet } from "react-helmet-async";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Home - 800 BBattery</title>
        <meta
          name="description"
          content="Welcome to our homepage. Discover our services and products."
        />
      </Helmet>

      <Banner />
      <ServiceHighlight />
      <AboutHome />
      <Service />
      <Testimonial />
      <Brand />
      <Video />
      <Funfacts />
      <Blog />
    </div>
  );
}
