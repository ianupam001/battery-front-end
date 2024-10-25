import { Link } from "react-router-dom";
import Menu from "../Menu";
import { useState, useEffect } from "react";
import { ContactModal } from "./ContactModal";
import { Button } from "flowbite-react";
// import MobileMenu from "../MobileMenu";

export default function Header2() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`main-header-two ${isSticky ? "sticky" : ""}`}>
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
                      <img
                        src="https://pentacodesdemos.com/800logo-new.png"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="">
                    <button
                      className="md:hidden"
                      // onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      <i className="fa fa-bars"></i>
                    </button>
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
      {/* Sidebar Component */}
      {/* <MobileMenu isSidebar={isSidebarOpen} handleMobileMenu={toggleSidebar} /> */}
    </>
  );
}
