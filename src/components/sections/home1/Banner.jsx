import { Link } from 'react-router-dom';
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useState,useEffect } from 'react'

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
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}


export default function Banner() {
    const [sliders, setslider] = useState([]);

    useEffect(() => {
      const fetchSliders = async () => {
        const res = await fetch('/api/slider/getsliders');
        const slider_list = await res.json();
        setslider(slider_list.sliders);
        console.log(sliders);
      };
      fetchSliders();
    }, []);

    return (
        <>
        {/* Main Slider Two Start */}
        <section className="main-slider-three">
            <Swiper {...swiperOptions} className="main-slider-three__carousel owl-carousel owl-theme">
            {sliders && sliders.length > 0 && (
                <div>
                { sliders.map((slider) => (
                    <div>
                <SwiperSlide>
                <div className="item">
                    <div className="main-slider-three__bg" style={{ backgroundImage: `url(${slider.image})` }}
                         >
                    </div>
                    <div className="main-slider-three__shape-1">
                        <img src="assets/images/shapes/main-slider-three-shape-1.png" alt=""/>
                    </div>
                    <div className="main-slider-three__shape-2">
                        <img src="assets/images/shapes/main-slider-three-shape-2.png" alt=""/>
                    </div>
                    <div className="main-slider-three__shape-3">
                        <img src="assets/images/shapes/main-slider-three-shape-3.png" alt="" className="img-bounce" />
                    </div>
                    <div className="container">
                        <div className="main-slider-three__content">
                            <div className="main-slider-three__sub-title-box">
                                <p className="main-slider-three__sub-title">Best BBattery</p>
                            </div>
                            <h2 className="main-slider-three__title">{slider.title}</h2>
                            <p className="main-slider-three__text">{slider.title}</p>
                            <div className="main-slider-three__btn-box">
                                <Link href="services" className="main-slider-three__btn thm-btn">Check Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                </div>
                )) }
                </div>
            )}
            </Swiper>
        </section>
        {/*Main Slider Start */} 
            
        </>
    )
}
