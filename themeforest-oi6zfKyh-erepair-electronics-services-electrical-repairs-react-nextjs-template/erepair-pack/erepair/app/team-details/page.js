
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Member Details">
        {/*Team Details Start*/}
        <section className="team-details">
            <div className="container">
                <div className="team-details__inner">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5">
                            <div className="team-details__left">
                                <div className="team-details__img">
                                    <img src="assets/images/team/team-details-img-1.jpg" alt=""/>
                                </div>
                                <div className="team-details__contact-box">
                                    <h3 className="team-details__contact-title">Contact info</h3>
                                    <ul className="team-details__contact-list list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-envelope"></span>
                                            </div>
                                            <p><Link href="mailto:example@email.com">example@email.com</Link></p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-phone-call"></span>
                                            </div>
                                            <p><Link href="tel:+13330000000">+1(333) 000-0000</Link></p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-location"></span>
                                            </div>
                                            <p>915 Hill Street, USA</p>
                                        </li>
                                    </ul>
                                    <div className="team-details__social">
                                        <Link href="#"><i className="fab fa-facebook"></i></Link>
                                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                                        <Link href="#"><i className="fab fa-instagram"></i></Link>
                                        <Link href="#"><i className="fab fa-linkedin"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7">
                            <div className="team-details__right">
                                <h3 className="team-details__title-1">Susan Sarandom</h3>
                                <p className="team-details__sub-title">Founder and CEO</p>
                                <p className="team-details__text-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis
                                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla
                                    pariatur. aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat
                                    nulla
                                    pariatur.</p>
                                <h3 className="team-details__title-2">Professional Skills</h3>
                                <p className="team-details__text-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <ul className="team-details__progress-list list-unstyled">
                                    <li className="team-details__progress">
                                        <h4 className="team-details__progress-title">Repair Device</h4>
                                        <div className="bar">
                                            <div className="bar-inner count-bar" data-percent="90%" style={{ width: '90%' }}>
                                                <div className="count-text">90%</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="team-details__progress">
                                        <h4 className="team-details__progress-title">Replace Device</h4>
                                        <div className="bar">
                                            <div className="bar-inner count-bar" data-percent="85%" style={{ width: '85%' }}>
                                                <div className="count-text">85%</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="team-details__progress">
                                        <h4 className="team-details__progress-title">Diagnostics</h4>
                                        <div className="bar">
                                            <div className="bar-inner count-bar" data-percent="80%" style={{ width: '80%' }}>
                                                <div className="count-text">80%</div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Team Details End*/}

        {/*CTA One Start*/}
        <section className="cta-one">
            <div className="container">
                <div className="cta-one__inner">
                    <div className="cta-one__img">
                        <img src="assets/images/resources/cta-one-img-1.png" alt=""/>
                    </div>
                    <div className="section-title text-left">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">Get To Know Us</span>
                        </div>
                        <div className="section-title__title-box sec-title-animation animation-style2">
                            <h2 className="section-title__title title-animation">Save Money With Specials<br/> Discount Offer
                            </h2>
                        </div>
                    </div>
                    <p className="cta-one__text">Pleasures to secure other greater pleasures, or else he endures pains<br/>
                        to avoid worse pains to the selection circumstances</p>
                    <div className="cta-one__btn-and-call-box">
                        <div className="cta-one__btn-box">
                            <Link href="contact" className="cta-one__btn thm-btn">Get Appointment</Link>
                        </div>
                        <div className="cta-one__call-box">
                            <div className="icon">
                                <span className="icon-call"></span>
                            </div>
                            <div className="content">
                                <p>Make a call</p>
                                <h4><Link href="tel:00554755242">00 55 475 5242</Link></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*CTA One End*/}
        </Layout>
        </>
    )
}