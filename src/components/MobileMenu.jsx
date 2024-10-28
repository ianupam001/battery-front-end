"use client";
import { Link } from "react-router-dom";
import { useState } from "react";
import footerLogo from "/assets/images/800bbatterywhite.png";
const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };
  return (
    <>
      <div className="mobile-nav__wrapper">
        <div
          className="mobile-nav__overlay mobile-nav__toggler"
          onClick={handleMobileMenu}
        ></div>
        <div className="mobile-nav__content">
          <span
            className="mobile-nav__close mobile-nav__toggler"
            onClick={handleMobileMenu}
          >
            <i className="fa fa-times"></i>
          </span>

          <div className="logo-box">
            <Link to={`/`} aria-label="logo image">
              <img
                src={footerLogo}
                width="150"
                alt=""
              />
            </Link>
          </div>

          <div className="mobile-nav__container">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent"
            >
              <ul className="main-menu__list">
                <li>
                  <Link to={`/`}>Home</Link>
                </li>
                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}><Link to={`/`} >Home</Link>
                                    <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                        <li><Link href="index2">Home Two</Link></li>
                                        <li><Link href="index3">Home Three</Link></li>
                                        <li><Link href="index-dark">Home Dark</Link></li>
                                    </ul>
                                    <button className={isActive.key == 1 ? "expanded open" : ""} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></button>
                                </li>
                <li>
                  <Link to={`/about`}>About</Link>
                </li>
                <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}><Link href="/#">Pages</Link>
                                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>                                 
                                        <li><Link href="team">Team</Link></li>
                                        <li><Link href="team-details">Team Details</Link></li>
                                        <li><Link href="projects">Projects</Link></li>
                                        <li><Link href="project-details">Project Details</Link></li>
                                        <li><Link href="testimonials">Testimonials</Link></li>
                                        <li><Link href="pricing">Pricing</Link></li>
                                        <li><Link href="faq">Faq</Link></li>
                                        <li><Link href="404">404 Error</Link></li>
                                    </ul>
                                    <button className={isActive.key == 2 ? "expanded open" : ""} onClick={() => handleToggle(2)}><span className="fa fa-angle-right" /></button>
                                </li>
                                <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}><Link href="/#">Services</Link>
                                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>                                 
                                        <li><Link href="services">Services</Link></li>
                                        <li><Link href="electric-panel-repair">Electric Panel Repair</Link></li>
                                        <li><Link href="short-circuit-repair">Short Circuit Repair</Link>
                                        </li>
                                        <li><Link href="commercial-services">Commercial Services</Link>
                                        </li>
                                        <li><Link href="installing-ceiling-fan">Installing A Ceiling Fan</Link>
                                        </li>
                                        <li><Link href="lighting-fixtures">Lighting A Fixtures</Link>
                                        </li>
                                        <li><Link href="maintenance-service">Maintenance Service</Link></li>
                                    </ul>
                                    <button className={isActive.key == 3 ? "expanded open" : ""} onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></button>
                                </li>
                                <li className={isActive.key == 4 ? "dropdown current" : "dropdown"}><Link href="/#">Shop</Link>
                                    <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>                                 
                                        <li><Link href="shop">Products</Link></li>
                                        <li><Link href="shop-details">Products Details</Link></li>
                                        <li><Link href="cart">Cart</Link></li>
                                        <li><Link href="checkout">Checkout</Link></li>
                                        <li><Link href="wishlist">Wishlist</Link></li>
                                        <li><Link href="account">My Account</Link></li>
                                    </ul>
                                    <button className={isActive.key == 4 ? "expanded open" : ""} onClick={() => handleToggle(4)}><span className="fa fa-angle-right" /></button>
                                </li>
                                <li className={isActive.key == 5 ? "dropdown current" : "dropdown"}><Link href="/#">Blog</Link>
                                    <ul style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>                                 
                                        <li><Link href="blog">Blog</Link></li>
                                        <li><Link href="blog-list">Blog List</Link></li>
                                        <li><Link href="blog-details">Blog Details</Link></li>
                                    </ul>
                                    <button className={isActive.key == 5 ? "expanded open" : ""} onClick={() => handleToggle(5)}><span className="fa fa-angle-right" /></button>
                                </li>
                <li>
                  <Link to={`/contact`}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <Link href="mailto:support@800bbattery.com">
                support@800bbattery.com
              </Link>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <Link href="tel:+971509344668">+971 50 934 4668</Link>
            </li>
          </ul>
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <Link href="https://www.facebook.com/profile.php?id=61565118175123">
                <i className="icon-facebook"></i>
              </Link>
              <Link href="https://www.instagram.com/800b.battery/">
                <i className="icon-instagram"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MobileMenu;
