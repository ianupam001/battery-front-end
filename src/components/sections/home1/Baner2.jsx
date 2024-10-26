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
  const [sourcePage, setSourcePage] = useState("");
  useEffect(() => {
    setSourcePage(window.location.pathname);
  }, []);
  return (
    <>
      {/* Main Slider Two Start */}
      <section className="main-slider-three">
        <Swiper
          {...swiperOptions}
          className="main-slider-three__carousel owl-carousel owl-theme"
        >
          <SwiperSlide>
            <div className="item">
              <div
                className="main-slider-three__bg"
                style={{
                  backgroundImage:
                    "url(https://firebasestorage.googleapis.com/v0/b/blogs-app-e2c7f.appspot.com/o/1729598128060-128eb4_bb8559d032404d22a027a51dd14e7419~mv2.webp?alt=media&amp;token=1ac7496f-66be-4d0f-abaf-c11f0c9e4ff2)",
                }}
              ></div>
              <div className="main-slider-three__shape-1">
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
              </div>
              <div className="container flex justify-between">
                <div className="main-slider-three__content ">
                  <div className="main-slider-three__sub-title-box">
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
                  </div>
                </div>
                <div className="main-slider-three__content">
                  <ContactFormModal sourcePage={sourcePage} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      {/*Main Slider Start */}
    </>
  );
}
