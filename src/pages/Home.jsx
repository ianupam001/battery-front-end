import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import AboutHome from "../components/sections/home1/About";
import Blog from "../components/sections/home1/Blog";
import ServiceHighlight from "../components/sections/home1/ServiceHighlight";
import Service from "../components/sections/home1/Service";

import Video from "../components/sections/home1/Video";
import Brand from "../components/sections/home1/Brand";
import Funfacts from "../components/sections/home1/Funfacts";
import Testimonial from "../components/sections/home1/Testimonial";

import { Helmet } from "react-helmet-async";
import Banner2 from "../components/sections/home1/Baner2";
import Products from "../components/sections/home1/Products";
import Process from "../components/Process";

const apiUrl = import.meta.env.VITE_BASE_URL;

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [metaTags, setMetaTags] = useState(null);
  useEffect(() => {
    try {
      const fetchMetadata = async () => {
        const res = await fetch(`${apiUrl}/api/metatags/home`);
        const data = await res.json();
        if (res.ok) {
          setMetaTags(data);
        }
      };
      fetchMetadata();
    } catch (error) {
      console.error(error.message);
    }
  }, []);
  console.log(metaTags);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/post/getPosts`);
        const data = await res.json();
        setPosts(data.posts);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch posts", error);
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    null;
  }

  return (
    <div>
      <Helmet>
        <title>{metaTags?.title || ""}  </title>
        <meta
          name={metaTags?.description || "" }
          content={metaTags?.keywords || ""}
        />
        { metaTags?.other || ""}
      </Helmet>
      <Banner2 />
      <Service />
      <AboutHome />
      <Process />
      <Testimonial />
      <Products />
      <Brand />
      <ServiceHighlight />
      <Video />
      <Funfacts />
      <Blog />
    </div>
  );
}
