
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useState } from 'react'

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    
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

    const [isOpen, setOpen] = useState(false)
    return (
        <>

        {/* Main Sllider Start */}
        <section className="main-slider">
            <Swiper {...swiperOptions} className="main-slider__carousel owl-carousel owl-theme">
                <SwiperSlide>
                <div className="item">
                    <div className="main-slider__bg"
                        style={{ backgroundImage: 'url(assets/images/backgrounds/slider-1-1.jpg)' }} >
                    </div>{/* /.slider-one__bg */}
                    <div className="main-slider__shape-1"></div>
                    <div className="main-slider__shape-2"></div>
                    <div className="main-slider__shape-3"></div>
                    <div className="main-slider__img">
                        <img src="assets/images/resources/main-slider-img-1-1.png" alt=""/>
                    </div>
                    <div className="container">
                        <div className="main-slider__content">
                            <div className="main-slider__sub-title-box">
                                <p className="main-slider__sub-title">Service Company</p>
                                <div className="main-slider__sub-title-shape"></div>
                            </div>
                            <h2 className="main-slider__title">Bright Solutions <br/> for Dark Problems</h2>
                            <p className="main-slider__text">We have been operating for over a decade, providing top-notch
                                sWe have <br/> operating over a decade, providing top-notch services to our clients</p>
                            <div className="main-slider__btn-box">
                                <Link href="about" className="main-slider__btn thm-btn">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="item">
                    <div className="main-slider__bg"
                        style={{ backgroundImage: 'url(assets/images/backgrounds/slider-1-2.jpg)' }} >
                    </div>{/* /.slider-one__bg */}
                    <div className="main-slider__shape-1"></div>
                    <div className="main-slider__shape-2"></div>
                    <div className="main-slider__shape-3"></div>
                    <div className="main-slider__img">
                        <img src="assets/images/resources/main-slider-img-1-2.png" alt=""/>
                    </div>
                    <div className="container">
                        <div className="main-slider__content">
                            <div className="main-slider__sub-title-box">
                                <p className="main-slider__sub-title">Service Company</p>
                                <div className="main-slider__sub-title-shape"></div>
                            </div>
                            <h2 className="main-slider__title">Bright Solutions <br/> for Dark Problems</h2>
                            <p className="main-slider__text">We have been operating for over a decade, providing top-notch
                                sWe have <br/> operating over a decade, providing top-notch services to our clients</p>
                            <div className="main-slider__btn-box">
                                <Link href="about" className="main-slider__btn thm-btn">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="item">
                    <div className="main-slider__bg"
                        style={{ backgroundImage: 'url(assets/images/backgrounds/slider-1-3.jpg)' }} >
                    </div>{/* /.slider-one__bg */}
                    <div className="main-slider__shape-1"></div>
                    <div className="main-slider__shape-2"></div>
                    <div className="main-slider__shape-3"></div>
                    <div className="main-slider__img">
                        <img src="assets/images/resources/main-slider-img-1-3.png" alt=""/>
                    </div>
                    <div className="container">
                        <div className="main-slider__content">
                            <div className="main-slider__sub-title-box">
                                <p className="main-slider__sub-title">Service Company</p>
                                <div className="main-slider__sub-title-shape"></div>
                            </div>
                            <h2 className="main-slider__title">Bright Solutions <br/> for Dark Problems</h2>
                            <p className="main-slider__text">We have been operating for over a decade, providing top-notch
                                sWe have <br/> operating over a decade, providing top-notch services to our clients</p>
                            <div className="main-slider__btn-box">
                                <Link href="about" className="main-slider__btn thm-btn">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
            </Swiper>
        </section>
        {/*Main Sllider Start */}

       


        
        </>
    )
}
