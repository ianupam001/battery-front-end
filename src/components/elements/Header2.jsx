
import { Link } from 'react-router-dom';
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header2({ scroll, handleMobileMenu }) {
    return (
        <>

        <header className="main-header-two">
            <div className="main-menu-two__top">
                <div className="container">
                    <div className="main-menu-two__top-inner">
                        <div className="main-menu-two__top-left">
                            <div className="main-menu-two__social">
                            <Link href="https://www.facebook.com/profile.php?id=61565118175123"><i className="icon-facebook"></i></Link>
                            <Link href="https://www.instagram.com/800b.battery/"><i className="icon-instagram"></i></Link>
                            </div>
                            <p className="main-menu-two__text">Welcome to 800 BBattery</p>
                        </div>
                        <ul className="list-unstyled main-menu-two__contact-list">
                            <li>
                                <div className="icon">
                                    <i className="icon-location"></i>
                                </div>
                                <div className="text">
                                    <p>Al Asayel Street - 160St Warehouse no. 2 - 318th Rd</p>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="icon-envelope"></i>
                                </div>
                                <div className="text">
                                    <p><Link href="mailto:support@800bbattery.com">support@800bbattery.com</Link>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <nav className="main-menu main-menu-two bg-color-extra">
                <div className="main-menu-two__wrapper">
                    <div className="container">
                        <div className="main-menu-two__wrapper-inner">
                            <div className="main-menu-two__left">
                                <div className="main-menu-two__logo">
                                    <Link href="/"><img src="https://pentacodesdemos.com/800logo.png" alt=""/></Link>
                                </div>
                                <div className="main-menu-two__main-menu-box">
                                    <Link to={`/`} className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                    <Menu />
                                </div>
                            </div>
                            <div className="main-menu-two__right">
                                <div className="main-menu-two__call-and-btn-box">
                                    <div className="main-menu-two__call">
                                        <div className="main-menu-two__call-icon">
                                            <span className="icon-phone-call"></span>
                                        </div>
                                        <div className="main-menu-two__call-number">
                                            <p>Make a call</p>
                                            <h5><Link href="tel:+971509344668">+971509344668</Link></h5>
                                        </div>
                                    </div>
                                    <div className="main-menu-two__btn-box">
                                        <Link to={`/contact-us`} className="main-menu-two__btn thm-btn">Get Appointment</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <div className={`stricky-header stricked-menu main-menu main-menu-two ${scroll ? "stricky-fixed" : ""}`}>
            <div className="sticky-header__content">
                <div className="main-menu-two__wrapper">
                    <div className="container">
                        <div className="main-menu-two__wrapper-inner">
                            <div className="main-menu-two__left">
                                <div className="main-menu-two__logo">
                                    <Link href="/"><img src="https://pentacodesdemos.com/800logo.png" alt=""/></Link>
                                </div>
                                <div className="main-menu-two__main-menu-box">
                                    <Link to={`/`} className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                    <Menu />
                                </div>
                            </div>
                            <div className="main-menu-two__right">
                                <div className="main-menu-two__call-and-btn-box">
                                    <div className="main-menu-two__call">
                                        <div className="main-menu-two__call-icon">
                                            <span className="icon-phone-call"></span>
                                        </div>
                                        <div className="main-menu-two__call-number">
                                            <p>Make a call</p>
                                            <h5><Link href="tel:00554755242">00 55 475 5242</Link></h5>
                                        </div>
                                    </div>
                                    <div className="main-menu-two__btn-box">
                                        <Link href="contact" className="main-menu-two__btn thm-btn">Get a Quote</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>{/* /.sticky-header__content */}
        </div>{/* /.stricky-header */}
        <MobileMenu handleMobileMenu={handleMobileMenu} />
        

        </>
    )
}
