import { Link } from "react-router-dom";
import Menu from "../Menu";
import { useState, useEffect } from "react";
import { ContactModal } from "./ContactModal";
import { Button } from "flowbite-react";
import headerLogo from "/assets/images/800bbattery.png";
import MobileMenu from "../MobileMenu";

export default function Header2({ scroll, handlePopup }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    setIsSticky(window.scrollY > 0);
  };

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Conditionally add the "mobile-menu-visible" class to the header */}
      <header
        className={`main-header-two ${isSticky ? "sticky" : ""} ${
          isMobileMenuOpen ? "mobile-menu-visible" : ""
        }`}
      >
        <div className="main-menu-two__top">
          <div className="container">
            <div className="main-menu-two__top-inner">
              <div className="main-menu-two__top-left">
                <div className="main-menu-two__social">
                  <Link to="https://www.facebook.com/profile.php?id=61565118175123">
                    <i className="icon-facebook"></i>
                  </Link>
                  <Link to="https://www.instagram.com/800b.battery/">
                    <i className="icon-instagram"></i>
                  </Link>
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
                    <p>
                      <Link to="mailto:support@800bbattery.com">
                        support@800bbattery.com
                      </Link>
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
                    <Link to="/">
                      <img src={headerLogo} alt="Logo" />
                    </Link>
                  </div>
                  <Button
                    className="main-menu-two__btn thm-btn mobile_btn d-md-none w-68 h-12  px-4 text-sm"
                    onClick={() => setModalOpen(true)}
                  >
                    Get Appointment
                  </Button>
                  <div className="d-md-none">
                    {/* Mobile menu toggle button */}
                    <button onClick={handleMobileMenu}>
                      <i
                        className={`fa text-2xl ${
                          isMobileMenuOpen ? "fa-times" : "fa-bars"
                        }`}
                      ></i>
                    </button>
                  </div>
                  <div className="d-none d-md-block">
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
                        <h5>
                          <Link to="tel:+971509344668">+971509344668</Link>
                        </h5>
                      </div>
                    </div>
                    <div className="main-menu-two__btn-box">
                      <Button
                        className="main-menu-two__btn thm-btn"
                        onClick={() => setModalOpen(true)}
                      >
                        Get Appointment
                      </Button>
                      <ContactModal
                        isOpen={isModalOpen}
                        onClose={() => setModalOpen(false)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* Conditionally render MobileMenu when isMobileMenuOpen is true */}
      {isMobileMenuOpen && (
        <MobileMenu
          handleMobileMenu={handleMobileMenu}
          isSidebar={isMobileMenuOpen}
        />
      )}
    </>
  );
}
