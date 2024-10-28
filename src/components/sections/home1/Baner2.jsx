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
      {/* Main Slider Two Start */}
      <section className="main-slider-three">
        <Swiper
          {...swiperOptions}
          className="main-slider-three__carousel owl-carousel owl-theme"
        >
          {sliders && sliders.length > 0 && (
            <div>
            {sliders?.map((slider, index) => (
            
            <SwiperSlide>
              <div className="item" key={index}>
                <div
                  className="main-slider-three__bg"
                  style={{
                    backgroundImage:
                      `url(${slider.image})`,
                  }}
                ></div>
                {/* <div className="main-slider-three__shape-1">
                  <img
                    src="assets/images/shapes/main-slider-three-shape-1.png"
                    alt=""
                  />
                </div>
                <div className="main-slider-three__shape-2">
                  <img
                    src="assets/images/shapes/main-slider-three-shape-2.png"
                    alt=""
                  />
                </div>
                <div className="main-slider-three__shape-3">
                  <img
                    src="assets/images/shapes/main-slider-three-shape-3.png"
                    alt=""
                    className="img-bounce"
                  />
                </div> */}
                <div className="container flex justify-between banner_section">
                  <div className="main-slider-three__content banner_content">
                    {/* <div className="main-slider-three__sub-title-box">
                      <p className="main-slider-three__sub-title">Best Battery</p>
                    </div>
                    <h2 className="main-slider-three__title">800 B Battery</h2>
                    <p className="main-slider-three__text">800 B Battery</p>
                    <div className="main-slider-three__btn-box">
                      <Link
                        to="services"
                        className="main-slider-three__btn thm-btn"
                      >
                        Check Now
                      </Link>
                    </div> */}
                  </div>
                  <div className="main-slider-three__content banner_form">
                    <ContactFormModal sourcePage={sourcePage} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          </div>
      )}
        </Swiper>
      </section>
      {/*Main Slider Start */}
    </>
  );
}
