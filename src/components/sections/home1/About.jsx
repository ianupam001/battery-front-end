import { Link } from 'react-router-dom';
export default function About() {
    return (
        <>
        {/*About One Start */}
        <section className="about-one about-four">
            <div className="about-one__shape-one float-bob-y">
                <img src="assets/images/shapes/about-one-shape-1.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-one__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="about-one__img-box-1">
                                        <div className="about-one__img-1">
                                            <img src="https://erepair.vercel.app/assets/images/resources/about-one-img-1.jpg" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="about-one__cirtified">
                                        <div className="icon">
                                            <span className="icon-certified"></span>
                                        </div>
                                        <h3>We are certified<br/> company since 1997</h3>
                                    </div>
                                    <div className="about-one__img-box-2">
                                        <div className="about-one__img-2">
                                            <img src="https://erepair.vercel.app/assets/images/resources/about-one-img-2.jpg" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-one__right wow fadeInRight" data-wow-delay="300ms">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">Get To Know Us</span>
                                </div>
                                <div className="section-title__title-box sec-title-animation animation-style2">
                                    <h2 className="section-title__title title-animation">General Auto Repair & Car This
                                        Maintenance
                                        Place
                                    </h2>
                                </div>
                            </div>
                            <p className="about-one__text-1">The wise
                                man therefore always holds in these
                                matters to this
                                principle of selection. He rejects pleasures to secure other greater pleasures, or else
                                he endures pains to avoid worse pains to the selection point. But in certain
                                circumstances</p>
                            <p className="about-one__text-2">Duis acute arura dolor in reprehenderit in voluptate velit esse
                                cillum dolore Velit esse quam nihil molestiae consequatur, Velia ease chillum dolore eu
                                fugato nullar partiture. Exception sint occaecatvel qui dolorem eum fugiat quo quail
                                dolor sit amen, consectetur, </p>
                            <div className="about-one__btn-box">
                                <Link to={`/about`} className="about-one__btn thm-btn">About Us More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About One End */}
        
        </>
    )
}