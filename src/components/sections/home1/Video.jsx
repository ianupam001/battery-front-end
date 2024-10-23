'use client'

import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function Video() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            {/*Video One Start*/}
            <section className="video-one">
                <div className="video-one__sahpe-1">
                    <img src="assets/images/shapes/video-one-shape-1.png" alt=""/>
                </div>
                <div className="video-one__bg wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms"
                    style={{ backgroundImage: 'url(https://erepair.vercel.app/assets/images/backgrounds/video-one-bg.jpg)' }} >

                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6"></div>
                        <div className="col-xl-6">
                            <div className="video-one__right wow fadeInRight" data-wow-delay="300ms">
                                <div className="section-title text-left">
                                    <div className="section-title__tagline-box">
                                        <span className="section-title__tagline">contact with us</span>
                                    </div>
                                    <div className="section-title__title-box sec-title-animation animation-style2">
                                        <h2 className="section-title__title title-animation">Choose Our Electric Repair Service
                                            because its 24/7</h2>
                                    </div>
                                </div>
                                <p className="video-one__text-1">The wise man therefore always holds in these matters to this
                                    principle of selection. He rejects pleasures to secure other greater pleasures, or else
                                    he endures pains to avoid worse pains to the selection point.</p>
                                <p className="video-one__text-2">But in certain circumstances and owing iodide pianissimos
                                    dulcimers quiThe wise man therefore always holds in these matters to this principle of
                                    selection.</p>
                                <div className="video-one__btn-box">
                                    <Link href="about" className="video-one__btn thm-btn">Discover More</Link>
                                    <Link href="contact" className="video-one__btn-two thm-btn">Free estimate</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
