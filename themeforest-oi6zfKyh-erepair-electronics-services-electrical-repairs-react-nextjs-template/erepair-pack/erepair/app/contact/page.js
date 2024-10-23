
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Contact">
        {/*Contact Two Start*/}
        <section className="contact-two">
            <div className="container">
                <div className="row">
                    {/*Contact Two Single Start*/}
                    <div className="col-xl-4 col-lg-4">
                        <div className="contact-two__single">
                            <div className="contact-two__icon">
                                <span className="icon-call"></span>
                            </div>
                            <p>Contact Us</p>
                            <h3><Link href="tel:558270575405">+55 827 057 5405</Link></h3>
                        </div>
                    </div>
                    {/*Contact Two Single End*/}
                    {/*Contact Two Single Start*/}
                    <div className="col-xl-4 col-lg-4">
                        <div className="contact-two__single">
                            <div className="contact-two__icon">
                                <span className="icon-envelope"></span>
                            </div>
                            <p>Mail Us</p>
                            <h3><Link href="mailto:example@gamil.com">example@gamil.com</Link></h3>
                        </div>
                    </div>
                    {/*Contact Two Single End*/}
                    {/*Contact Two Single Start*/}
                    <div className="col-xl-4 col-lg-4">
                        <div className="contact-two__single">
                            <div className="contact-two__icon">
                                <span className="icon-location"></span>
                            </div>
                            <p>Our Office Location</p>
                            <h3>12 Green Road 05 New Yark</h3>
                        </div>
                    </div>
                    {/*Contact Two Single End*/}
                </div>
            </div>
        </section>
        {/*Contact Two End*/}

        {/*Contact Three Start*/}
        <section className="contact-three">
            <div className="container">
                <div className="contact-three__inner">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="contact-three__left">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                                    className="google-map__one" ></iframe>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="contact-three__right">
                                <h3 className="contact-three__form-title">Get A Free Quote</h3>
                                <form id="contact-form" className="contact-form-validated contact-three__form"
                                    action="assets/mail.php" method="POST">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="contact-three__input-box">
                                                <input type="text" name="name" placeholder="Your name" required=""/>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="contact-three__input-box">
                                                <input type="email" name="email" placeholder="Your Email" required=""/>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="contact-three__input-box">
                                                <input type="number" placeholder="Mobile" name="number"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="contact-three__input-box">
                                                <input type="text" placeholder="Company" name="company"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="contact-three__input-box text-message-box">
                                                <textarea name="message" placeholder="Messege"></textarea>
                                            </div>
                                            <div className="contact-three__btn-box">
                                                <button type="submit" className="thm-btn contact-three__btn"
                                                    data-loading-text="Please wait...">
                                                    send a message
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <p className="ajax-response mb-0"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Contact Three End*/}


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