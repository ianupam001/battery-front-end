import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ContactFormModal } from "../../elements/ContactFormModal";
import { useEffect, useState } from "react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function Banner() {
  const apiUrl = import.meta.env.VITE_BASE_URL;
  const [sourcePage, setSourcePage] = useState("");

  const [sliders, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`${apiUrl}/api/slider/getSliders?limit=1`);
      const blogslider = await res.json();
      setPosts(blogslider.sliders);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <section className="md:hidden relative h-screen mb-[90vh] ">
        <img
          src="assets/images/banner-mobile.jpeg"
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-[90vh] left-0 right-0 flex justify-center">
          <ContactFormModal sourcePage={sourcePage} />
        </div>
      </section>

      <section className="hidden md:block">
        <div
          className="flex justify-between items-center"
          style={{
            backgroundImage: `url(assets/images/banner-desktop.jpeg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div className="container flex justify-between items-center banner_section">
            <div className="main-slider-three__content banner_content"></div>
            <div className="main-slider-three__content banner_form">
              <ContactFormModal sourcePage={sourcePage} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
